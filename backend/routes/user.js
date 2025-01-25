const express = require('express')
const User = require('../models/User')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authenticateToken = require('../middlewares/authentication')
const Product = require('../models/Product')

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body
    
        const isUserExists = await User.exists({ email })
        if (!isUserExists) {
            const hash = await bcrypt.hash(password, 10);
            const newUser = new User({
                name, email, password:hash
            })
            await newUser.save()
            res.status(200).json({ message: `User is registered` })
        }
        else {
            res.status(400).json({ message: `User already exists` })
    
        }
        
    } catch (error) {
        console.error(error);
    res.status(500).json({ message: 'Server error' });
    }


})

router.post('/login',async(req,res)=>{
    try {
        const {email, password}= req.body
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({ message: 'Invalid username or password' });
        }
    
        // Compare provided password with stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(400).json({ message: 'Invalid username or password' });
        }
    
        // Generate JWT
        const token = jwt.sign(
          { id: user._id,name:user.name, email: user.email }, // Payload
          'JWT_SECRET', // Secret key
          { expiresIn: '1h' } // Token expiration time
        );
    
        res.status(200).json({ message: 'Login successful', token });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
    });

router.get('/products',authenticateToken,async(req,res)=>{
    try {
        const getProducts= await Product.find({})
        res.status(200).json({data:getProducts})
    } catch (error) {
        res.status(500).json({error})
    }
})

module.exports = router
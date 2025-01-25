const express = require('express')
const app = express()
require('./dbConfig')
const cors = require('cors')
const userRoutes = require('./routes/user')

app.use(cors())
app.use(express.json())
app.use(userRoutes)

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.listen('3001',()=>{
    console.log('Server is listening at 3001')
})
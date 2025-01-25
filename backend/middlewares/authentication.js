const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Expecting "Bearer <token>"
    if (!token) {
      return res.status(401).json({ message: 'Access token required' });
    }
  
    jwt.verify(token, 'JWT_SECRET', (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
      }
      req.user = user; // Attach user info from token to the request
      next();
    });
  };

module.exports =authenticateToken
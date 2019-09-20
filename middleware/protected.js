const jwt = require('jsonwebtoken')
const secrets = require('../config/secret.js')

module.exports = (req, res, next) => {
  const token = req.headers.authorization

  // CHECKING THAT THE TOKEN IS VALID 
  // PROTECTS PROTECTED ROUTES
  if(token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if(err) {
        res.status(401).json({message:'You must be logged in to see that.'})
      } else {
        req.user = { username: decodedToken.username }
        next()
      }
    })
  } else {
    res.status(400).json({ message: 'please provide a token' })
  }
};


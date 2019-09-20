const jwt = require('jsonwebtoken')
const secrets = require('../config/secret.js')


// GENERATING TOKEN
function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    type: user.type
  }
  const options = {
     expiresIn: '2h'
  }
   return jwt.sign(payload, secrets.jwtSecret, options)
}


module.exports = generateToken
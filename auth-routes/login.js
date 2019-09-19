const router = require('express').Router();
const db =require('../data/dbConfig.js');
const bcrypt=require('bcryptjs')
const jwt =require('jsonwebtoken')
const secrets=require('../config/secret.js')


router.post('/', (req, res) => {
  let {username, password} = req.body

  if(!req.body.username && !req.body.password) {
    res.status(422).json({message: 'Please provide a name and a password to log in'})
  } else {
    db('users')
    .where({username})
    .first()
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)) {
        const token=generateToken(user)
        res.status(200).json({username: user.username, id: user.id, type: user.type, token})
      } else {
        res.status(401).json({message: 'Invalid credentials'})
      }
    })
    .catch(err => {
      res.status(500).json({error: err, message: 'Error logging in'})
    })
  }
})


// GENERATING TOKEN
function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    type: user.type
  }
  const options = {
     expiresIn: '8h'
  }
   return jwt.sign(payload, secrets.jwtSecrets, options)
}


module.exports = router
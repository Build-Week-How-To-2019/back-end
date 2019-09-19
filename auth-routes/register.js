const router = require('express').Router();
const db =require('../data/dbConfig.js');
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken')
const secrets=require('../config/secret.js')


router.post('/', (req, res) => {
  let  user = req.body

  const hash = bcrypt.hashSync(user.password, 10)
  user.password=hash

  if(!user.username || !user.password || !user.type) {
    res.status(422).json({message: 'Please enter Username, Password and choose type of account'})
  } else {
    db('users')
    .insert(req.body, 'id')
    .then(user => {
      db('users')
      .where({username: req.body.username})
      .first()
      .then(user => {
        const token = generateToken(user)
        res.status(200).json({
          username: user.username, 
          id: user.id, 
          type: user.type, token
        })
      })
      .catch(err => {
        res.send(err.message).json({message:'Unable to register'})
      })
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
     expiresIn: '2h'
   }
    return jwt.sign(payload, secrets.jwtSecrets, options)
}


module.exports = router
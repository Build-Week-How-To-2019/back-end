const router = require('express').Router();
const bcrypt = require('bcryptjs');

const generateToken = require('../config/token')
const Users = require('../models/userModels')


router.post('/', (req, res) => {
  let {username, password} = req.body

  if(!req.body.username && !req.body.password) {
    res.status(422).json({message: 'Please provide a name and a password to log in'})
  } else {
    Users.findBy({username})
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user)

        res.status(200).json({
          username: user.username,
          message: `Welcome ${user.username}!`,
          id: user.id, 
          type: user.type, token
        })

      } else {
        res.status(401).json({message: 'Invalid credentials'})
      }
    })
    .catch(err => {
      res.status(500) 
      .json({ message: "Sorry, but something went wrong while logging in" });
    })
  }
})



module.exports = router
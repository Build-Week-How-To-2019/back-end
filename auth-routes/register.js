const router = require('express').Router();
const bcrypt = require('bcryptjs');

const generateToken = require('../config/token')
const Users = require('../models/userModels')


router.post('/', (req, res) => {
  let  user = req.body

  const hash = bcrypt.hashSync(user.password, 10)
  user.password=hash

  if(!user.username || !user.password || !user.type) {
    res.status(422).json({message: 'Please enter Username, Password and choose type of account'})
  } else {
    Users.add(user)
      .then(newUser => {
        const token = generateToken(newUser)

        res.status(200).json({  
          message: `Welcome ${user.username} You have been successfully registered!`,
          id: user.id, 
          type: user.type, token
        })
      })
      .catch(err => {
        res.status(500)
        .json({ message: "Sorry, but something went wrong while registering" })
      })
  }
})


module.exports = router
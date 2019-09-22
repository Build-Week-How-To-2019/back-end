const router = require('express').Router();
const Users = require('../models/userModels');
const protect = require('../middleware/protected.js')

const db = require('../database/dbConfig')

// GET USERS
router.get('/', protect, (req, res) => {
  Users.find()
   .then(users => {
      res.status(200).json(users)
   })
    .catch(err => res.send(err))
})


// GET USERS BY ID
router.get('/:id', protect, (req, res) => {
  const { id } =  req.params
 
  Users.findById(id)
  .then(user => {
    if(user) {
      db('guides')
      .where({ user_id: id })
      .then(guides => {
        user.guides = guides
        res.status(200).json(user)
      })
    } else {
      res.status(404).json({message:'The user with the specified ID does not exist'})
    }
  })
  .catch(err => {
    res.status(500).json({message: 'Unable to find the user'})
  })
})


module.exports = router
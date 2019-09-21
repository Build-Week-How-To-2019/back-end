const router = require('express').Router();
const Guides = require('../models/guideModels');
const protect = require('../middleware/protected.js')
const checkType = require('../middleware/checkType.js')


// POST GUIDE
router.post("/", (req, res) => {
  const { title, description, instructions, user_id, type, likes, card_image } = req.body
  //console.log(title, description)

  if(!title || !description || !user_id) {
    res.status(400).json({
       message: 'Sorry, all new guides require a title and description and user_id'
     })
    return
  }

  Guides.addGuide({ title, description, instructions, user_id, type, likes, card_image })
  .then(guide => {
      res.status(201).json(guide)
  })
   .catch(() => {
     res.status(500).json({
       message: 'Sorry, something went wrong while adding guide'
     })
   })
})


// GET GUIDES
router.get('/', (req, res) => {
 Guides.getAll()
  .then(guides => {
    res.status(200).json(guides);
    })
    .catch(err => res.send(err.message));
});


// GET BY ID
router.get('/:id', (req, res) => {
  const id = req.params.id
 
 Guides.getById(id)
  .then(guide => {

    if(guide.length > 0){
    res.status(200).json(guide)
    } else {
    res.status(404).json({message:'the specified Guide does not exist'})
    }

  })
 .catch(err => {
   res.status(500).json(err.message)
 })
})


// UPDATE GUIDE
router.put('/:id', protect, (req, res) => {
  const { id } = req.params

  Guides.findById(id)
  .update(req.body)
  .then(count => {
    if (count > 0) {
      res.status(200).json({message:`${count} Guide was updated`})
    } else {
      res.status(404).json({message:'the specified Guided does not exist'})
    }
  })
  .catch(err => {
    res.status(500).json(err.message)
  })
});


// DELETE ROUTE
router.delete('/:id', protect, (req, res) => {
  const { id } = req.params

  Guides.findById(id)
  .del()
  .then(count =>{
    if (count > 0){
      res.status(200).json({message:`${count} Guide was deleted`})
    } else {
      res.status(400).json({message:'the specified Guide does not exist'})
    }
  })
  .catch(err =>{
    res.status(500).json(err.message)
  })
});



module.exports = router
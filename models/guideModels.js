const db = require('../database/dbConfig.js')

module.exports = {
  addGuide,
  getGuides,
  findById

}

async function addGuide(newGuide) {
  const [id] = await db('guides').insert(newGuide)
 return getGuides() // returns all guides
 // return findById(id) // return newly added guide only
}

// RETURNS COUNT
// function addGuide(guide) {
//   console.log(guide)
//   return db('guides')
//   .insert(guide)
// }

function getGuides() {
  return db('guides')
}

function findById(id) {
  return db('guides')
  .where({ id })
  .first()
}





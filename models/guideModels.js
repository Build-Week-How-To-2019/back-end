const db = require('../database/dbConfig.js')

module.exports = {
  addGuide,
  getAll,
  getById,
  findById

}

async function addGuide(newGuide) {
  const [id] = await db('guides').insert(newGuide)
  // return getGuides() // returns all guides
  return findById(id) // return newly added guide only
}

// RETURNS COUNT
// function addGuide(guide) {
//   console.log(guide)
//   return db('guides')
//   .insert(guide)
// }

function getAll() {
  return db('guides')
  .join('users','guides.user_id','users.id',)
  .select('*')
 }

function getById(id) {
  return  db('guides')
  .join('users','guides.user_id','users.id',)
  .select('*')
  .where('guides.id', id)
 }

function findById(id) {
  return db('guides')
  .where({ id })
  .first()
}





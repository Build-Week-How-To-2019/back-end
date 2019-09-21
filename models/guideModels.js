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

// FOR PostgreSQL
// async function add(table, data) {
//   const [item] = await db
//     .from(table)
//     .insert(data)
//     .returning('*'); // for PostgreSQL
//   return item;
// }


// RETURNS COUNT // KEPT FOR EXAMPLE PURPOSES
// function addGuide(guide) {
//   console.log(guide)
//   return db('guides')
//   .insert(guide)
// }

function getAll() {
  return db('guides')
  .join('users','guides.user_id','users.id',)

  .select('guides.id', 'guides.title', {username:'users.username'}, 'guides.type', 'guides.description', 'guides.user_id', 'guides.instructions', 'guides.likes', 'guides.card_image')
 }

function getById(id) {
  return  db('guides')
  .join('users','guides.user_id','users.id',)

  .select('guides.id', 'guides.title', {username:'users.username'}, 'guides.type', 'guides.description', 'guides.user_id', 'guides.instructions', 'guides.likes', 'guides.card_image')

  .where('guides.id', id)
 }

function findById(id) {
  return db('guides')
  .where({ id })
  .first()
}





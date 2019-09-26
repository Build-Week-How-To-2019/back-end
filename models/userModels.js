const db = require('../database/dbConfig.js')

module.exports = {
  add,
  find,
  findBy,
  findById
}


// IF USING SQLITE 
async function add(user) {
  const [id] = await db('users').insert(user)
  return findById(id)
}


// IF USING PostgreSQL
// async function add(user) {
//   const [item] = await db('users').insert(user)
//     .returning('*')
//   return item
// }


function find() {
  return db('users')
}

function findBy(filter) {
  return db('users').where(filter).first()
}

function findById(id) {
  return db('users')
  .where({ id })
  .first()
}



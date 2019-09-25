exports.up = function(knex) {
  return knex.schema.createTable('guides', tbl => {
  tbl.increments()

  tbl
   .string('title', 128)
   .notNullable()
   .unique()

   tbl
    .string('description', 256)
    .notNullable()
 
   tbl
   .integer('user_id')
   .unsigned()
   .references('id')
   .inTable('users')
   .onDelete('CASCADE')
   .onUpdate('CASCADE')

   tbl
   .string('type',128)

   tbl
    .integer('likes')

   tbl
    .string('instructions', 812)

   tbl
    .string('card_image', 256)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('guides')
};
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
     tbl.increments()

     tbl.string('username', 128)
     .notNullable()
     .unique()

     tbl
     .string('password')
     .notNullable()

     tbl
     .string('type')
     .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};




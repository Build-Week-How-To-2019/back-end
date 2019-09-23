exports.up = function(knex) {
  return knex.schema.createTable('cloud_images', tbl => {
    tbl.increments()
    
    tbl
    .string('cloud_image', 512)

    tbl
     .integer('guide_id')
     .unsigned()
     .references('id')
     .inTable('guides')
     .onDelete('CASCADE')
     .onUpdate('CASCADE')
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cloud_images')
};

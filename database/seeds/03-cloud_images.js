
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cloud_images').del()
    .then(function () {
      // Inserts seed entries
      return knex('cloud_images').insert([
        { cloud_image: 'https://res.cloudinary.com/zauryelpcamp/image/upload/v1569212223/zmnn6qoz20pcqy4v1cqk.jpg'},
      ]);
    });
};

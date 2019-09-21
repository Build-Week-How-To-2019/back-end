
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('guides').del()
    .then(function () {
      // Inserts seed entries
      return knex('guides').insert([
        {
          title: "new title",
          user_id: 1,
          type: 'creator',
          description: "new description",
          likes: 10,
          instructions: "Do this right you dog",
          card_image: "link"
        },
        {
          title: "Michael olmalidi",
          user_id: 2,
          type:'viewer',
          description: "new description",
          likes: 10,
          instructions: "Do this right you dog",
          card_image: "link"
        },
        
      ]);
    });
};

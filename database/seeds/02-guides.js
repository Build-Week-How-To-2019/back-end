
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('guides').del()
    .then(function () {
      // Inserts seed entries
      return knex('guides').insert([
        {
          title: "Change Your Car Battery",
          user_id: 1,
          type: 'creator',
          description: "Learn how to change your car battery",
          likes: 135,
          instructions: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
          card_image: "https://cdn.pixabay.com/photo/2015/09/05/23/36/jumper-cables-926308_960_720.jpg"
       },
       {
         title: "Change Your Car Tire",
         user_id: 2,
         type: 'creator',
         description: "Learn how to change your car tires.",
         likes: 744,
         instructions: "Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
         card_image: "https://images.pexels.com/photos/1236788/pexels-photo-1236788.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
       },
       {
         title: "Replace A Broken Phone Screen",
         user_id: 3,
         type: 'creator',
         description: "Replace a phone cracked screen.",
         likes: 430,
         instructions: "Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.  Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi",
         card_image: "https://images.pexels.com/photos/1388947/technology-telephone-mobile-smart-1388947.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
       },
       {
         title: "How To Start A Wood Work Project",
         user_id: 4,
         type: 'creator',
         description: "How begin a wood work project",
         likes: 333,
         instructions: "It solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.  Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.",
         card_image: "https://images.pexels.com/photos/374861/pexels-photo-374861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
       },
       {
         title: "Add A Finish To Your Wood Work Furniture",
         user_id: 5,
         type: 'creator',
         description: "Learn how to add a great finish to your wood projects.",
         likes: 123,
         instructions: "Ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.  It solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.  Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.",
         card_image: "https://images.pexels.com/photos/221027/pexels-photo-221027.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
       },
       {
         title: "How To Paint Your Home",
         user_id: 6,
         type: 'creator',
         description: "Learn how to paint your home.",
         likes: 456,
         instructions: "Solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.  Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. Vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.",
         card_image: "https://images.pexels.com/photos/1573827/pexels-photo-1573827.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
       },
       {
         title: "How To Take Great Outdoors Photos",
         user_id: 1,
         type: 'creator',
         description: "Learn how to take pictures outdoors.",
         likes: 234,
         instructions: "Ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. Vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.  It solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.  Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer",
         card_image: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
       },
       {
         title: "How To Add Tiles To Your Home",
         user_id: 2,
         type: 'creator',
         description: "How to put tiles in your home.",
         likes: 345,
         instructions: "Sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. Vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.  It solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.  Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer",
         card_image: "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
       },
       {
         title: "How To Stir Fry",
         user_id: 3,
         type: 'creator',
         description: "Learn how stir fry.",
         likes: 567,
         instructions: "Sodales sit amet, nisi.  Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a.  Sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. Vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. It solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.  Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer",
         card_image: "https://images.pexels.com/photos/175754/pexels-photo-175754.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
       }
      ]);
    });
};



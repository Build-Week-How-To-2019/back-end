const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Zaur',password: bcrypt.hashSync('password1',10),type:'creator'},
        {username: 'Michael',password: bcrypt.hashSync('password1',10),type:'creator'},
        {username: 'Alibaba',password: bcrypt.hashSync('password1',10),type:'creator'},
        {username: 'Abu',password: bcrypt.hashSync('password1',10),type:'viewer'},
        {username: 'Octave',password: bcrypt.hashSync('password1',10),type:'viewer'},
        {username: 'Orwell',password: bcrypt.hashSync('password1',10),type:'viewer'}
      ]);
    });
};




const knex = require('knex');

const config = require('../knexfile.js');

const dbEnv = process.env.DB_ENV || 'development';
//const dbEnv = process.env.NODE_ENV || 'development'; // if something else isn't setting ENV, use development

module.exports = knex(config[dbEnv]);



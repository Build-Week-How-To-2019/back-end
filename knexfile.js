module.exports = {

     // SQLITE
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/howto.db3',
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      }
    }
  },

  //POSTGRE SQL
  // development: {
  //   client: 'pg',
  //   useNullAsDefault: true,
  //   connection: process.env.HEROKU_POSTGRESQL_OLIVE_URL, 
  //   migrations: {
  //     directory: './database/migrations',
  //   },
  //   seeds: {
  //     directory: './database/seeds',
  //   },
  // },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './database/howto.db3',
    },
    // client: 'pg',
    // connection: process.env.HEROKU_POSTGRESQL_OLIVE_URL, 
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/tester.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
};

const db = require('../database/dbConfig.js')

describe('Post to /register', () =>{
    
    afterEach(async () => {
      await db('users').delete();
    })

    it('should return one user', async () =>{
     await db('users').insert({
        username:'user1234', password:'123', type:'creator'
     });

     const users = await db('users')

     expect(users).toHaveLength(1);
    })


    it('should return an array', async () => {
      await db('users').insert({ 
           username:'test', password:'pass', type:'creator'
      })
    
        const res = await db('users');
    
        expect(Array.isArray(res)).toBe(true)
     })
})
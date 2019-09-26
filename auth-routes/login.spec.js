const db = require('../database/dbConfig.js')

describe('Post to /login', () => {
    
 // LOGIN TEST
 describe('Login', () => { 

  afterEach(async () => {
    await db('users').delete();
  });


    it('should insert provided user', async () => {
      await db('users').insert({ username: "user123", password: "123", type: "creator",});

      const res = await db('users');

      expect(res).toHaveLength(1);
    });


    it('should return an array', async () => {
        await db('users').insert({ 
           username:'test', password:'pass', type:'creator'
        })
  
        const res = await db('users');
  
        expect(Array.isArray(res)).toBe(true)
      })
   })
})
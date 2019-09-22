const request = require('supertest')
const server = require('../api/server')
const db = require('../database/dbConfig.js')

describe('Post to /login', () => {
    
 // LOGIN TEST
 describe('Login', () => {
  const credentials = { username: "user", password: "123" };   

  it('should return a successful status code', () => {
      return request(server)
      .post('/login')
      .send(credentials)
      .then(res => {
          expect(res.status).toBe(200)
      })
  })

  it('should return a welcome message', () => {
      const message = "Welcome user! Token"
      
      return request(server)
      .post('/login')
      .send(credentials)
      .then(res => {
          expect(res.body.message).toEqual(message)
      })
    })
   })
})
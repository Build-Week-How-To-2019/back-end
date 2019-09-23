const request = require('supertest')
const server = require('../api/server')
const db = require('../database/dbConfig.js')

describe('Post to /register', () => {
    
  describe("Register", () => {
    //clear db data before testing
    beforeEach(async () => {
        await db("users").truncate();
    });

    const credentials = { username: "user", password: "123", type: "creator" };

    it("should return a status 200", () => {
        return request(server)
        .post('/')
        .send(credentials)
        .then(res => {
            expect(res.status).toBe(200)
        })
    });

    it('should return a welcome message', () => {
        const message = "Welcome zaur! You have been successfully registered!"
        return request(server)
        .post('/api/auth/register')
        .send(credentials)
        .then(res => {
            expect(res.body.message).toEqual(message)
        })
    })

   })
})
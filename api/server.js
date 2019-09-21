const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const register = require('../auth-routes/register.js')
const login =require('../auth-routes/login.js')
const usersRouter = require('../routes/users-route')
const guidesRouter = require('../routes/guides-route')


const server=express()

// 3rd PARTY MIDDLEWARE
server.use(helmet());
server.use(express.json());
server.use(cors());

// ROUTES
server.use('/register', register);
server.use('/login', login);
server.use('/users', usersRouter)
server.use('/guides', guidesRouter)


// TEST SERVER
server.get('/',(req,res) =>{
    const envMessage = process.env.EMAIL_KEY || "if EMAIL_KEY is not defined in .env send this by default"
    res.status(200).json({
        message:'Server is up',
        envMessage
    })
})

 module.exports = server;
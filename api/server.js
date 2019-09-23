const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const fileupload = require('express-fileupload')
const db=require('../database/dbConfig.js')



const register = require('../auth-routes/register.js')
const login =require('../auth-routes/login.js')
const usersRouter = require('../routes/users-route')
const guidesRouter = require('../routes/guides-route')


const server=express()

// 3rd PARTY MIDDLEWARE
server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(fileupload({
    useTempFiles: true
}))

// ROUTES
server.use('/register', register);
server.use('/login', login);
server.use('/users', usersRouter)
server.use('/guides', guidesRouter)

  // CLOUDINARY
cloudinary.config({ 
    cloud_name: 'zauryelpcamp', 
    api_key: process.env.CLOUDINARY_API_KEY || "CLOUDINARY_API_KEY",  
    api_secret: process.env.CLOUDINARY_API_SECRET || "CLOUDINARY_API_SECRET"
  }); 
  

  // UPLOAD IMAGES TO CLOUD
  server.post('/upload', (req, res, next) => {  
    const file = req.files.photo
    //console.log(file)
    cloudinary.uploader.upload(file.tempFilePath, async function(err, result) {
        // console.log("Error", err)
        // console.log("Result", result.secure_url)
         await db('cloud_images').insert({cloud_image: result.secure_url})
         
            res.send({
                success: true,
                result
            })
     })
})

// GET CLOUD IMAGES
server.get('/images', (req, res) => {
    db.select('*').from('cloud_images')
    .then(images => {
        res.status(200).json(images);
    })
    .catch(err => res.send(err.message));
})


// TEST SERVER
server.get('/',(req,res) => {
    // process.env.EMAIL_KEY should be defined only in development // insomnia call will show it heroku wont
    const envMessage = process.env.EMAIL_KEY || "if EMAIL_KEY is not defined in heroku configs it will show this message by default"
    res.status(200).json({
        message:'Server is up',
        envMessage
    })
})

 module.exports = server;
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')


// Routes

const users = require('./Routes/users')
const createJob = require('./Routes/createJob')
const images = require('./Routes/Images')


// Database
const mongoose = require('mongoose')
mongoose.connect(process.env.LINK)
.then(()=>{
    app.listen(7777,()=>{
        console.log(`App is running`)
    })    
}).catch(err=>console.log('Mognodb',err))


// Routes
app.use(express.json({limit: '50mb'}))
app.use(cors())
app.use('/users',users)
app.use('/usermenu',createJob)
app.use('/images',images)
const express = require('express')
const router = express.Router()
// Controllers
const {logIn,signUp,AllUsers,Gmail} = require('../controlers/userController')
// All Data Users
router.get('/allDataUsers',AllUsers)
// login
router.post('/login',logIn)

// signup
router.post('/signup',signUp)

// Send Gmail
router.post('/gmail',Gmail)

module.exports = router
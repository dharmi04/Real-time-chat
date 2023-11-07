const express = require('express')
const {registerUser}= require("../controllers/userControllers");

const router = express.router();

// router.get('/').post(registerUser)
// router.get('/login', authUser)

module.exports = router;
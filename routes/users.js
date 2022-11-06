// File name: users.js
// Student's name: Wonyoung Chung
// StudentID: 301215136
// Date: Oct 22, 2022

const express = require("express")
const router = express.Router()
const usersController = require("../controller/user")
const passport = require("passport")

router.post("/signup", usersController.signup)

router.post("/signin", usersController.signin)

module.exports = router

// File name: users.js
// Student's name: Wonyoung Chung
// StudentID: 301215136
// Date: Oct 22, 2022

const express = require("express")
const router = express.Router()
const usersController = require("../controller/user")
const authController = require("../controller/auth")

// GET users listing
router.get("/me", authController.requireAuth, usersController.myProfile)

// router.get("/signup", usersController.renderSignup)
router.post("/signup", usersController.signup)

// router.get("/signin", usersController.renderSignin)
router.post("/signin", usersController.signin)

// router.get("/signout", usersController.renderSignout)

module.exports = router

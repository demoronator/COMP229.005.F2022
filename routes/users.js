const express = require("express")
const router = express.Router()
const usersController = require("../controller/user")
const passport = require("passport")

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("users", {
    title: "Users",
    userName: req.user ? req.user.username : ""
  })
})

router.get("/signup", usersController.renderSignup)
router.post("/signup", usersController.signup)

router.get("/signin", usersController.renderSignin)
router.post("/signin", usersController.signin)

router.get("/signout", usersController.signout)

module.exports = router

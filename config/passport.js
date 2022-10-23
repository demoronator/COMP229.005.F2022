// File name: passport.js
// Student's name: Wonyoung Chung
// StudentID: 301215136
// Date: Oct 22, 2022

const passport = require("passport")

module.exports = function () {
  const User = require("../models/user")

  passport.serializeUser((user, done) => {
    console.log("=====> serializeUser")
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findOne({
      _id: id
    }, "-password -salt", (err, user) => {
      console.log("=====> deserializeUser")
      done(err, user)
    })
  })

  require("./local")()
}

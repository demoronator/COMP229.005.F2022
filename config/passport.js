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

// File name: user.js
// Student's name: Wonyoung Chung
// StudentID: 301215136
// Date: Oct 22, 2022

const User = require("../models/user")
const passport = require("passport")
const jwt = require("jsonwebtoken")
const config = require("../config/config")
const { get } = require("mongoose")

function getErrorMessage(err) {
  console.log("===> Erro: " + err)
  let message = ""

  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = "Username already exists"
        break
      default:
        message = "Something went wrong"
    }
  } else {
    for (const errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message
    }
  }

  return message
}

module.exports.signup = function (req, res, next) {
  console.log(req.body)

  const user = new User(req.body)
  user.provider = "local"
  console.log(user)

  user.save((err) => {
    if (err) {
      const message = getErrorMessage(err)

      return res.status(400).json({
        success: false,
        message: message,
      })
    }
    return res.status(200).json({
      success: true,
      message: "Successfully signed up!",
    })
  })
}

module.exports.signin = function (req, res, next) {
  passport.authenticate("login",
    async (err, user, info) => {
      try {
        if (err || !user) {
          return res.status(400).json({
            success: false,
            message: err || info.message
          })
        }

        req.login(user, { session: false },
          async (error) => {
            if (error) return next(error)

            // Generating the JWT token
            const payload = {
              id: user._id,
              email: user.email,
            }
            const token = jwt.sign(
              { payload: payload },
              config.SECRETKEY,
              {
                algorithm: "HS256",
                expiresIn: "5hour",
              }
            )

            return res.json({
              success: true,
              token: token,
            })
          })
      } catch (error) {
        console.log(error)
        return res.status(400).json({
          success: false,
          message: getErrorMessage(error),
        })
      }
    })(req, res, next)
}

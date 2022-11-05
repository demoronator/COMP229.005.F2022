// File name: app.js
// Student's name: Wonyoung Chung
// StudentID: 301215136
// Date: Oct 22, 2022

const createError = require("http-errors")
const express = require("express")
const path = require("path")
const logger = require("morgan")
const compress = require("compression")
const bodyParser = require("body-parser")
const methodOverride = require("method-override")
const passport = require("passport")
const indexRouter = require("../routes/index")
const usersRouter = require("../routes/users")
const inventoryRouter = require("../routes/inventory")
const contactsRouter = require("../routes/contacts")
const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Sets up passport
app.use(passport.initialize())

app.use("/", indexRouter)
app.use("/users", usersRouter)
app.use("/inventory", inventoryRouter)
app.use("/contacts", contactsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404, "Endpoint not found."))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  // res.render("error")
  res.json({
    success: false,
    message: err.message,
  })
})

module.exports = app

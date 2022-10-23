// File name: app.js
// Student's name: Wonyoung Chung
// StudentID: 301215136
// Date: Oct 22, 2022

const createError = require("http-errors")
const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const compress = require("compression")
const bodyParser = require("body-parser")
const methodOverride = require("method-override")
const session = require("express-session")
const flash = require("connect-flash")
const passport = require("passport")
const indexRouter = require("../routes/index")
const usersRouter = require("../routes/users")
const inventoryRouter = require("../routes/inventory")
const app = express()

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: "sessionSecret"
}))

// view engine setup
app.set("views", path.join(__dirname, "../views"))
app.set("view engine", "ejs")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "../public")))
app.use(express.static(path.join(__dirname, "../node_modules")))

// Sets up passport
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

app.use("/", indexRouter)
app.use("/users", usersRouter)
app.use("/inventory", inventoryRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

module.exports = app

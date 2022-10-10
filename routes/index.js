// Student ID: 301215136
// Name: Wonyoung Chung
// Date: Oct 01, 2022

const express = require("express")
const router = express.Router()
const indexController = require("../controllers/index.controller")

/* GET home page. */
router.get("/", indexController.home)
router.get("/projects", indexController.projects)
router.get("/services", indexController.services)

router.get("/about", function(req, res, next) {
  res.render("index",
  {
    title: "About Me",
    name: "Wonyoung"
  })
})

router.get("/contact", function(req, res, next) {
  res.render("index",
  {
     title: "Contact",
     name: "Wonyoung"
  })
})

module.exports = router

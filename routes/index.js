// File name: index.js
// Student's name: Wonyoung Chung
// StudentID: 301215136
// Date: Oct 22, 2022

const express = require("express")
const router = express.Router()
const controlerIndex = require("../controller/index")
const controlerMessage = require("../controller/message")

/* GET home page. */
router.get("/", controlerIndex.home)

module.exports = router

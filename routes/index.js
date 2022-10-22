const express = require("express")
const router = express.Router()
const controlerIndex = require("../controller/index")

/* GET home page. */
router.get("/", controlerIndex.home)

/* GET About page avaulable on http://localhost:3000/about . */
router.get("/about", controlerIndex.about)

/* GET Projects page. */
router.get("/projects", controlerIndex.projects)

/* GET Services page. */
router.get("/services", controlerIndex.services)

/* GET Contact page. */
router.get("/contact", controlerIndex.contact)

/* POST Contact page. */
router.post("/contact", controlerIndex.processSendMessage)

module.exports = router

// File name: contacts.js
// Student's name: Wonyoung Chung
// StudentID: 301215136
// Date: Oct 22, 2022

const express = require("express")
const router = express.Router()
const controlerContacts = require("../controller/contact")

// Connect to our model
const Contact = require("../models/contact")

// helper function for guard purposes
function requireAuth(req, res, next) {
    // check if the user is logged in
    if (!req.isAuthenticated()) {
        req.session.url = req.originalUrl
        return res.redirect("/users/signin")
    }
    next()
}

/* GET Contacts list page. */
router.get("/list", requireAuth, controlerContacts.contactsList)

// Routers for edit
router.get("/edit/:id", requireAuth, controlerContacts.displayEditPage)
router.post("/edit/:id", requireAuth, controlerContacts.processEditPage)

// Delete
router.get("/delete/:id", requireAuth, controlerContacts.performDelete)

/* GET Route for displaying the Add page - CREATE Operation */
router.get("/add", requireAuth, controlerContacts.displayAddPage)

/* POST Route for processing the Add page - CREATE Operation */
router.post("/add", requireAuth, controlerContacts.processAddPage)

module.exports = router

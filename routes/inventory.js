// File name: inventory.js
// Student's name: Wonyoung Chung
// StudentID: 301215136
// Date: Oct 22, 2022

const express = require("express")
const router = express.Router()
const inventoryController = require("../controller/inventory")

// Connect to our model
const Inventory = require("../models/inventory")

// helper function for guard purposes
function requireAuth(req, res, next) {
    // check if the user is logged in
    if (!req.isAuthenticated()) {
        req.session.url = req.originalUrl
        return res.redirect("/users/signin")
    }
    next()
}

// GET list of items
router.get("/list", inventoryController.inventoryList)

// PUT Route for editing an item
router.put("/edit/:id", inventoryController.processEdit)

// DELETE
router.delete("/delete/:id", inventoryController.performDelete)

// POST Route for processing the Add page - CREATE Operation
router.post("/add", inventoryController.processAdd)

module.exports = router

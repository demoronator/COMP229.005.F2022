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

/* GET list of items */
router.get("/list", inventoryController.inventoryList)

// Routers for edit
router.get("/edit/:id", requireAuth, inventoryController.displayEditPage)
router.post("/edit/:id", requireAuth, inventoryController.processEditPage)

// Delete
router.get("/delete/:id", requireAuth, inventoryController.performDelete)


/* GET Route for displaying the Add page - CREATE Operation */
router.get("/add", requireAuth, inventoryController.displayAddPage)

/* POST Route for processing the Add page - CREATE Operation */
router.post("/add", requireAuth, inventoryController.processAddPage)

module.exports = router

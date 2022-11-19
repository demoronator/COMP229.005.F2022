// File name: inventory.js
// Student's name: Wonyoung Chung
// StudentID: 301215136
// Date: Oct 22, 2022

const express = require("express")
const router = express.Router()
const inventoryController = require("../controller/inventory")

// Connect to our model
const Inventory = require("../models/inventory")

const authController = require("../controller/auth")

// GET list of items
router.get("/list", inventoryController.inventoryList)

// PUT Route for editing an item
router.put("/edit/:id", authController.requireAuth, authController.isAllowed, inventoryController.processEdit)

// DELETE
router.delete("/delete/:id", authController.requireAuth, authController.isAllowed, inventoryController.performDelete)

// POST Route for processing the Add page - CREATE Operation
router.post("/add", authController.requireAuth, inventoryController.processAdd)

module.exports = router

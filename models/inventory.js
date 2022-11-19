// File name: inventory.js
// Student's name: Wonyoung Chung
// StudentID: 301215136
// Date: Oct 22, 2022

// Import
const mongoose = require("mongoose")

// Create a model class
const inventoryModel = mongoose.Schema(
    {
        item: String,
        qty: Number,
        tags: [],
        status: String,
        size: {
            h: Number,
            w: Number,
            uom: String
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        collection: "inventory"
    }
)

module.exports = mongoose.model("Inventory", inventoryModel)

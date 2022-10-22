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
        }
    },
    {
        collection: "items"
    }
)

module.exports = mongoose.model("Inventory", inventoryModel)

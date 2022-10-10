const mongoose = require("mongoose")

const inventoryModel = new mongoose.Schema(
{
    item: String,
    qty: Number,
    tags: [String],
    status: String,
    size: {
        h: Number,
        w: Number,
        uom: String,
    }
},
{
    collection: "inventory"
})

module.exports = mongoose.model("Inventory", inventoryModel)

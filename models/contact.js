// File name: contact.js
// Student's name: Wonyoung Chung
// StudentID: 301215136
// Date: Oct 22, 2022

// Import
const mongoose = require("mongoose")

// Create a model class
const contactModel = mongoose.Schema(
    {
        contactName: String,
        contactNumber: String,
        email: String,
    },
    {
        collection: "contacts"
    }
)

module.exports = mongoose.model("Contact", contactModel)

// File name: message.js
// Student's name: Wonyoung Chung
// StudentID: 301215136
// Date: Oct 22, 2022

// Import
const mongoose = require("mongoose")

// Create a model class
const messageModel = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        phone: String,
        email: String,
        message: String
    },
    {
        collection: "messages"
    }
)

module.exports = mongoose.model("Message", messageModel)

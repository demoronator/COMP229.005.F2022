// File name: message.js
// Student's name: Wonyoung Chung
// StudentID: 301215136
// Date: Oct 22, 2022

const MessageModel = require("../models/message")

module.exports.processSendMessage = (req, res, next) => {
    const newItem = MessageModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        message: req.body.message
    })

    MessageModel.create(newItem, (err, item) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            // refresh the book list
            console.log(item)
            res.redirect("/")
        }
    })
}

// File name: index.js
// Student's name: Wonyoung Chung
// StudentID: 301215136
// Date: Oct 22, 2022

exports.home = function (req, res, next) {
    console.log("===> Original URL: " + req.session.url)
    res.render("index", {
        title: "Home",
        userName: req.user ? req.user.username : ""
    })
}

exports.about = function (req, res, next) {
    res.render("about", {
        title: "About",
        userName: req.user ? req.user.username : ""
    })
}

exports.projects = function (req, res, next) {
    res.render("projects", {
        title: "Projects",
        userName: req.user ? req.user.username : ""
    })
}

exports.services = function (req, res, next) {
    res.render("services", {
        title: "Services",
        userName: req.user ? req.user.username : ""
    })
}


const MessageModel = require("../models/message")

exports.contact = function (req, res, next) {
    res.render("contact", {
        title: "Contact",
        userName: req.user ? req.user.username : ""
    })
}

exports.processSendMessage = (req, res, next) => {
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

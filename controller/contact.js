// File name: contact.js
// Student's name: Wonyoung Chung
// StudentID: 301215136
// Date: Oct 22, 2022

// create a reference to the model
const ContactModel = require("../models/contact")

module.exports.contactsList = function (req, res, next) {
    ContactModel.find((err, contactsList) => {
        if (err) {
            return console.error(err)
        }
        else {
            contactsList.sort((a, b) => a.contactName.localeCompare(b.contactName))
            res.render("contacts/list", {
                title: "Contacts List",
                ContactsList: contactsList,
                userName: req.user ? req.user.username : ""
            })
        }
    })
}

module.exports.displayEditPage = (req, res, next) => {
    const id = req.params.id
    ContactModel.findById(id, (err, itemToEdit) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            //show the edit view
            res.render("contacts/add_edit", {
                title: "Edit Contact",
                contact: itemToEdit,
                userName: req.user ? req.user.username : ""
            })
        }
    })
}

module.exports.processEditPage = (req, res, next) => {
    const id = req.params.id
    const updatedItem = ContactModel({
        _id: id,
        contactName: req.body.name,
        contactNumber: req.body.number,
        email: req.body.email,
    })

    ContactModel.updateOne({ _id: id }, updatedItem, (err) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            // console.log(req.body)
            // refresh the book list
            res.redirect("/contacts/list")
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    const id = req.params.id
    ContactModel.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            // refresh the book list
            res.redirect("/contacts/list")
        }
    })
}

module.exports.displayAddPage = (req, res, next) => {
    const newItem = ContactModel()
    res.render("contacts/add_edit", {
        title: "Add a new Contact",
        contact: newItem,
        userName: req.user ? req.user.username : ""
    })
}

module.exports.processAddPage = (req, res, next) => {
    const newItem = ContactModel({
        _id: req.body.id,
        contactName: req.body.name,
        contactNumber: req.body.number,
        email: req.body.email,
    })

    ContactModel.create(newItem, (err, item) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            // refresh the book list
            console.log(item)
            res.redirect("/contacts/list")
        }
    })
}

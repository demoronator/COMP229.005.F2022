// File name: inventory.js
// Student's name: Wonyoung Chung
// StudentID: 301215136
// Date: Oct 22, 2022

// create a reference to the model
const InventoryModel = require("../models/inventory")

function getErrorMessage(err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message
        }
    }
    if (err.message) {
        return err.message
    } else {
        return "Unknown server error"
    }
}

module.exports.inventoryList = function (req, res, next) {
    InventoryModel.find((err, inventoryList) => {
        if (err) {
            console.error(err)

            res.status(400).json({
                success: false,
                message: getErrorMessage(err),
            })
        }
        else {
            res.status(200).json(inventoryList)
        }
    })
}

module.exports.processEdit = (req, res, next) => {
    const id = req.params.id
    const updatedItem = InventoryModel({
        _id: id,
        item: req.body.item,
        qty: req.body.qty,
        status: req.body.status,
        size: {
            h: req.body.size.h,
            w: req.body.size.w,
            uom: req.body.size.uom,
        },
        tags: req.body.tags.split(",").map(word => word.trim())
    })

    InventoryModel.updateOne({ _id: id }, updatedItem, (err) => {
        if (err) {
            console.log(err)
            res.status(400).json({
                success: false,
                message: getErrorMessage(err),
            })
        }
        else {
            // console.log(req.body)
            res.status(200).json({
                success: true,
                message: "Item updated successfully",
            })
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    const id = req.params.id
    InventoryModel.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err)
            res.status(400).json({
                success: false,
                message: getErrorMessage(err),
            })
        }
        else {
            // refresh the book list
            res.status(200).json({
                success: true,
                message: "Item deleted successfully",
            })
        }
    })
}

module.exports.processAdd = (req, res, next) => {
    const newItem = InventoryModel({
        _id: req.body.id,
        item: req.body.item,
        qty: req.body.qty,
        status: req.body.status,
        size: {
            h: req.body.size.h,
            w: req.body.size.w,
            uom: req.body.size.uom,
        },
        tags: req.body.tags.split(",").map(word => word.trim())
    })

    InventoryModel.create(newItem, (err, item) => {
        if (err) {
            console.log(err)
            res.status(400).json({
                success: false,
                message: getErrorMessage(err),
            })
        }
        else {
            console.log(item)
            res.status(200).json(item)
        }
    })
}

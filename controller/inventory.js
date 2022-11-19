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

module.exports.inventoryList = async function (req, res, next) {
    try {
        const inventoryList = await InventoryModel.find().populate({
            path: "owner",
            select: "firstName lastName email username admin created"
        })
        res.status(200).json(inventoryList)
    } catch (error) {
        return res.status(400).json(
            {
                success: false,
                message: getErrorMessage(error)
            }
        )
    }
}

module.exports.processEdit = (req, res, next) => {
    try {
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
            tags: (req.body.tags) ? req.body.tags.split(",").map(word => word.trim()) : "",
            // owner: (req.body.owner) ? req.body.owner : req.payload.id,
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
                // refresh the book list
                res.status(200).json({
                    success: true,
                    message: "Item updated successfully",
                })
            }
        })
    } catch (error) {
        return res.status(400).json(
            {
                success: false,
                message: getErrorMessage(error)
            }
        )
    }
}

module.exports.performDelete = (req, res, next) => {
    const id = req.params.id
    try {
        InventoryModel.deleteOne({ _id: id }, (err) => {
            if (err) {
                console.log(err)
                res.status(400).json({
                    success: false,
                    message: getErrorMessage(err),
                })
            }
            else {
                res.status(200).json({
                    success: true,
                    message: "Item deleted successfully",
                })
            }
        })
    } catch (error) {
        return res.status(400).json(
            {
                success: false,
                message: getErrorMessage(error)
            }
        )
    }
}

module.exports.processAdd = (req, res, next) => {
    try {
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
            tags: (req.body.tags) ? req.body.tags.split(",").map(word => word.trim()) : "",
            // owner: (req.body.owner) ? req.body.owner : req.payload.id,
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
    } catch (error) {
        return res.status(400).json(
            {
                success: false,
                message: getErrorMessage(error)
            }
        )
    }
}

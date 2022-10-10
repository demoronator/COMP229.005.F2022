const Inventory = require("../models/inventory.model")

exports.inventoryList = function (req, res, next) {
    Inventory.find({}, function (err, inventoryList) {
        if (err) {
            return next(err)
        }
        res.render("inventory/list", { title: "Inventory List", inventoryList: inventoryList })
    })
}

module.exports.displayEditPage = (req, res, next) => {
    const id = req.params.id

    Inventory.findById(id, (err, item) => {
        if (err) {
            console.error(err)
            res.end(err)
        } else {
            // show the edit view
            res.render("inventory/add_edit", { title: "Edit Item", item: item })
        }
    })
}

module.exports.processEditPage = (req, res, next) => {
    const id = req.params.id

    const updatedItem = Inventory({
        _id: id,
        item: req.body.item,
        qty: req.body.qty,
        status: req.body.status,
        size: {
            h: req.body.size_h,
            w: req.body.size_w,
            uom: req.body.size_uom,
        },
        tags: req.body.tags.split(",").map(tag => tag.trim()),
    })

    // console.log(updatedItem)

    Inventory.updateOne({ _id: id }, updatedItem, (err) => {
        if (err) {
            console.error(err)
            res.end(err)
        } else {
            // console.log(req.body)
            // refresh the inventory list
            res.redirect("/inventory/list")
        }
    })
}

module.exports.displayAddPage = (req, res, next) => {
    const newItem = Inventory()
    res.render("inventory/add_edit", { title: "Add a New Item", item: newItem })
}

module.exports.processAddPage = (req, res, next) => {
    const newItem = new Inventory({
        _id: req.body.id,
        item: req.body.item,
        qty: req.body.qty,
        status: req.body.status,
        size: {
            h: req.body.size_h,
            w: req.body.size_w,
            uom: req.body.size_uom,
        },
        tags: req.body.tags.split(",").map(tag => tag.trim()),
    })

    Inventory.create(newItem, (err, item) => {
        if (err) {
            console.error(err)
            res.end(err)
        } else {
            // refresh the inventory list
            console.log(item)
            res.redirect("/inventory/list")
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    const id = req.params.id

    Inventory.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err)
            res.end(err)
        } else {
            // refresh the inventory list
            res.redirect("/inventory/list")
        }
    })
}

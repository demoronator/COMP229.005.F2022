const passport = require("passport")
const Inventory = require("../models/inventory")
const UserModel = require("../models/user")

function getErrorMessage(err) {
    if (err.errors) {
        err.errors.array.forEach(element => {
            if (err.errors[element].message) {
                return err.errors[element].message
            }
        })
    }
    if (err.message) {
        return err.message
    }
    return "Unknown server error"
}

// helper function for guard purposes
exports.requireAuth = function (req, res, next) {
    passport.authenticate("tokenCheck", { session: false },
        function (err, user, info) {
            if (err) {
                return res.status(401).json({
                    success: false,
                    message: getErrorMessage(err)
                })
            }
            if (info) {
                return res.status(401).json({
                    success: false,
                    message: info.message
                })
            }

            req.payload = user
            next()
        })(req, res, next)
}

exports.isAllowed = async function (req, res, next) {
    try {
        const id = req.params.id
        const inventoryItem = await Inventory.findById(id).populate("owner")

        if (!inventoryItem)
            throw new Error("Inventory item not found")

        if (!inventoryItem.owner)
            return next()

        if (inventoryItem.owner._id !== req.payload.id) {
            const currentUser = await UserModel.findOne({ _id: req.payload.id }, "admin")
            if (!currentUser.admin) {
                console.log("====> Not authorized")
                return res.status(403).json({
                    success: false,
                    message: "Not authorized"
                })
            }
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: getErrorMessage(error)
        })
    }
}

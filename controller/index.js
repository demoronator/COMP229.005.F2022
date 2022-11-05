// File name: index.js
// Student's name: Wonyoung Chung
// StudentID: 301215136
// Date: Oct 22, 2022

module.exports.home = function (req, res, next) {
    res.status(200).json({
        success: true,
        message: "This is the home endpoint.",
    })
}

module.exports.about = function (req, res, next) {
    res.render("about", {
        title: "About",
        userName: req.user ? req.user.username : ""
    })
}

module.exports.projects = function (req, res, next) {
    res.render("projects", {
        title: "Projects",
        userName: req.user ? req.user.username : ""
    })
}

module.exports.services = function (req, res, next) {
    res.render("services", {
        title: "Services",
        userName: req.user ? req.user.username : ""
    })
}

module.exports.contact = function (req, res, next) {
    res.render("contact", {
        title: "Contact",
        userName: req.user ? req.user.username : ""
    })
}

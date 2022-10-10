exports.home = function (req, res, next) {
    res.render("index", { title: "Home", name: "Wonyoung" })
}

exports.projects = function (req, res, next) {
    res.render("projectservices", { title: "Projects"})
}

exports.services = function (req, res, next) {
    res.render("projectservices", { title: "Services"})
}

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

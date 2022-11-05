// File name: db.js
// Student's name: Wonyoung Chung
// StudentID: 301215136
// Date: Oct 22, 2022

const config = require("./config")
const mongoose = require("mongoose")

module.exports = function () {
    mongoose.connect(config.ATLASDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("Connected to MongoDB..."))
        .catch(err => console.error("Could not connect to MongoDB..."))

    return mongoose.connection
}

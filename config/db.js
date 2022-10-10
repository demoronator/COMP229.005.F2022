// In real project, never expose your credentials in your code.
const atlasDB = "mongodb+srv://dbuser:HTb2bUHYrZ4QSY-@cluster0.clwtsy8.mongodb.net/products?retryWrites=true&w=majority"
const mongoose = require("mongoose")

module.exports = function () {
    mongoose.connect(atlasDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("Connected to MongoDB..."))
        .catch(err => console.error("Could not connect to MongoDB..."))
    
    return mongoose.connection
}

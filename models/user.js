const mongoose = require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/mindx')

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: [String]
})

const userModel = mongoose.model('users', userSchema)

module.exports = { userModel }
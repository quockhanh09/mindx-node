const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mindx:SJGpUTkbL3alyyQj@cluster0.6ho40kz.mongodb.net/mindx')

const songSchema = new mongoose.Schema({
    name: String,
    author: String
})

const songModel = mongoose.model('songs', songSchema)

module.exports = { songModel }
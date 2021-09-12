const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AuthorsSchema = new Schema({
    name: { type: String },
    age: { type: Number }
})
module.exports = mongoose.model('authorsData', AuthorsSchema)
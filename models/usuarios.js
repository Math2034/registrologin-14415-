var mongoose = require('mongoose')

var modelo = new mongoose.Schema({
    nome:String,
    email:String,
    senha:String
})

module.exports = mongoose.model('usuarios',modelo)
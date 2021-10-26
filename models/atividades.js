var mongoose = require('mongoose')

var modelo = new mongoose.Schema({
    data:Date,
    tipo:String,
    entrega:String,
    disciplina:String,
    instrucoes:String,
    user:String
})

module.exports = mongoose.model('atividades',modelo)
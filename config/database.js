var mongoose = require('mongoose')

var conexao = ()=> {
    mongoose.connect('mongodb+srv://registrouser:210511@cluster0.tfqrg.mongodb.net/LoginRegistro?retryWrites=true&w=majority')
}

module.exports = conexao
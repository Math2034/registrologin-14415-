var express = require('express') 
var app = express()

app.use(express.urlencoded({extended:false}))

var porta = process.env.PORT || 8922

module.exports = {app,porta}
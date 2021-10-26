var server = require('./config/server')
var app = server.app
var porta = server.porta

var consign = require('consign')
consign().include('./routes').into(app)

app.listen(porta)
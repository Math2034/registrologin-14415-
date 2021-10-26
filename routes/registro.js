module.exports = (app)=>{
    //importar bcrypt
    var bcrypt = require('bcrypt')

    app.get('/registro',(req,res)=>{
        res.render('registro.ejs')
    })

    app.post('/registro',async(req,res)=>{
        var conexao = require('../config/database')()
        var usuario = require('../models/usuarios')

        var userexiste = await usuario.findOne({email:req.body.email})

        if(userexiste){
            return res.render('registro.ejs',{mensagem:'Email já Cadastrado'})
        }else{
            var senhasegura = await bcrypt.hash(req.body.senha,12)
            var documento = new usuario({
                nome:req.body.nome,
                email:req.body.email,
                senha:senhasegura
            }).save()
            res.render('/login')
        }
    })
}

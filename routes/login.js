module.exports = (app)=>{
    app.get('/login',(req,res)=>{
        res.render('login.ejs')
    })

    app.post('/login', async(req,res)=>{
        var conexao = require('../config/database')()
        var usuarios = require('../models/usuarios')

        var userexiste = await usuarios.findOne({email:req.body.email})
        if(userexiste){
            var bcrypt = require('bcrypt')
            var verificar = await bcrypt.compare(req.body.senha,userexiste.senha)
            if(verificar){
                res.redirect('/dashboard?id='+userexiste._id)
            }else{
                res.render('login.ejs',{mensagem:'usuario e/ou senha incorreta'})
            }
        }else{
            res.render('login.ejs',{mensagem:'Email não cadastrado'})
        }
    })
}

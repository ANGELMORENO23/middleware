const fs = require("fs")
const admin = ["Ada", "Greta", "Vim", "Tim"]
const path = require("path")
const texto = path.join(__dirname,"../logs/userLogs.txt")

function usuario(req,res,next){
    const input= req.body.usuario
    if (admin.includes(input)){
        res.send(` Hola ${req.body.usuario} Usted tiene pertmiso de administrador`)
        const ingreso = `El usuario ${req.body.usuario} ingresó a la WEB\n`
    fs.appendFileSync(texto,ingreso)
        next()
    }else{
        res.send(`Hola ${req.body.usuario} !No tienes permiso de adminitrador!`)
    }
    
}
module.exports = usuario
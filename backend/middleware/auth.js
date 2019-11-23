const jwt = require('jsonwebtoken')

function auth(req, res, next){
    let jwtToken = req.header('Authorization')
    jwtToken = jwtToken.split(' ')[1]
    if(!jwtToken) return res.status(401).send('Acceso Denegado. No hay token')

    try{
        const payload = jwt.verify(jwtToken, "secretKey")
        req.user = payload
        next()
    } catch(e){
        res.status(400).send('Acceso Denegado. Token no valido')
    }
}

module.exports = auth
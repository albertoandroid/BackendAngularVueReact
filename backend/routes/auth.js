const express = require('express')
const router = express.Router()
const {User} = require('../models/user')

router.post('/', async(req, res)=>{
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send('Usuario o contraseña son incorrectos')

    if(user.password !== req.body.password) return res.status(400).send('Usuario o contraseña son incorrectos')

    const jwtToken = user.generateJWT()
    res.status(200).send({jwtToken})
})

module.exports = router
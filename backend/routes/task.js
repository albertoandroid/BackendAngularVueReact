const express = require('express')
const router = express.Router()
const Task = require('../models/task')
const {User} = require('../models/user')
const auth = require('../middleware/auth')

router.post('/', auth, async(req, res)=>{
    const user = await User.findById(req.user._id)
    if(!user) return res.status(400).send('no hay ese usuario')

    const task = new Task({
        userId: user._id,
        name: req.body.name,
        status: 'to-do',
        description: req.body.description
    })

    const result = await task.save()
    res.status(201).send(result)
})

module.exports = router
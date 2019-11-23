const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    userId: String,
    name: String,
    description: String,
    status: String,
    imageUrl: String,
    date: {type:Date, default: Date.now}
})

const Task = mongoose.model('task', taskSchema)

module.exports = Task
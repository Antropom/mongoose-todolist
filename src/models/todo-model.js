const mongoose = require('mongoose')

const todoTaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
})

const TodoTask = mongoose.model('TodoTask', todoTaskSchema)

module.exports = TodoTask

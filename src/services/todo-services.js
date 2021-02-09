const TodoTaskModel = require('../models/todo-model')

const findAll = () => {
  return TodoTaskModel.find()
}

const findOne = (id) => {
  return TodoTaskModel.findById(id)
}

const search = (query) => {
  const reg = new RegExp(query, 'i')
  return TodoTaskModel.find({ message: reg })
}

const create = (datas) => {
  const todoTask = new TodoTaskModel({
    title: datas.title,
    description: datas.description ? datas.description : null,
    date: datas.date,
  })
  return todoTask.save().then((result) => {
    return result
  })
}

module.exports = { findAll, findOne, search, create }
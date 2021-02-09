const TodoTaskModel = require('../models/todo-model')

const findAll = () => {
  return TodoTaskModel.find()
}

const findOne = (id) => {
  return TodoTaskModel.findById(id)
}

const search = (query) => {
  const reg = new RegExp(query, 'i')
  return TodoTaskModel.find({ title: reg })
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

const update = (doc, datas) => {
  doc.title = datas.title ? datas.title : doc.title
  doc.date = datas.date ? datas.date : doc.date
  doc.description = datas.description ? datas.description : doc.description
  return doc.save().then((results) => {
    return results
  })
}

module.exports = { findAll, findOne, search, create, update }

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

const update = (id, datas) => {
  return TodoTaskModel.findByIdAndUpdate(
    id,
    datas,
    { useFindAndModify: false },
    (results) => {
      return results
    }
  )
}

const delOne = (id) => {
  return TodoTaskModel.deleteOne({ _id: id }, (results) => results)
}

module.exports = { findAll, findOne, search, create, update, delOne }

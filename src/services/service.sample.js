const MessageModel = require('../models/model.sample')

const findAll = () => {
  return MessageModel.find()
}

const findOne = (id) => {
  return MessageModel.findById(id)
}

const search = (query) => {
  const reg = new RegExp(query, 'i')
  return MessageModel.find({ message: reg })
}

const create = (datas) => {
  const message = new MessageModel({
    message: datas.message,
    optional: datas.optional ? datas.optional : null,
  })
  return message.save().then((result) => {
    message.log()
    return result
  })
}

module.exports = { findAll, findOne, search, create }

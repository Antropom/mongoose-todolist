const todoTaskService = require('../services/todo-services')

const findAll = async (req, res) => {
  try {
    const results = await todoTaskService.findAll()
    res.status(200).json(results)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

const findOne = async (req, res) => {
  const { id } = req.params
  try {
    const result = await todoTaskService.findOne(id)
    if (result) {
      res.status(200).json({
        message: 'Success',
        result,
      })
    } else {
      res.status(404).send(`No task found with id ${id}`)
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

const search = async (req, res) => {
  const { query } = req.params
  try {
    const results = await todoTaskService.search(query)
    if (results.length !== 0) {
      res.status(200).json({
        message: 'Success',
        results,
      })
    } else {
      res.status(404).send('Nothing found')
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

const create = async (req, res) => {
  const datas = req.body
  if (datas.date && datas.title) {
    try {
      const result = await todoTaskService.create(datas)
      res.status(201).json({
        message: 'Created',
        result,
      })
    } catch (err) {
      res.status(500).send(err.message)
    }
  } else {
    res.status(400).send('Missing datas')
  }
}

const update = async (req, res) => {
  const { id } = req.params
  const datas = req.body
  try {
    const result = await todoTaskService.update(id, datas)
    res.status(201).send('Task updated')
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = {
  findAll,
  findOne,
  search,
  create,
  update,
}

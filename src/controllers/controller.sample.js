const messageService = require('../services/service.sample')

const findAll = async (req, res) => {
  try {
    const results = await messageService.findAll()
    res.status(200).json(results)
  } catch (err) {
    res.status(500).json(err)
  }
}

const findOne = async (req, res) => {
  const { id } = req.params
  try {
    const result = await messageService.findOne(id)
    if (result) {
      res.status(200).json({
        message: 'Success',
        result,
      })
    } else {
      res.status(404).json({ message: `No Message found with id ${id}` })
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

const search = async (req, res) => {
  const { query } = req.params
  try {
    const results = await messageService.search(query)
    if (results.length !== 0) {
      res.status(200).json({
        message: 'Success',
        results,
      })
    } else {
      res.status(404).json({ message: 'Nothing found' })
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

const create = async (req, res) => {
  const datas = req.body
  try {
    const result = await messageService.create(datas)
    res.status(201).json({
      message: 'Created',
      result,
    })
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = {
  findAll,
  findOne,
  search,
  create,
}

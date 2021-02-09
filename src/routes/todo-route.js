const express = require('express')
const router = express.Router()
const {
  findAll,
  findOne,
  search,
  create,
  update,
} = require('../controllers/todo-controler')

router.get('/', findAll)
router.get('/:id', findOne)
router.get('/search/:query', search)
router.post('/', create)
router.put('/:id', update)

module.exports = router

const express = require('express')
const router = express.Router()
const {
  findAll,
  findOne,
  search,
  create,
} = require('../controllers/controller.sample')

router.get('/', findAll)
router.get('/:id', findOne)
router.get('/search/:query', search)
router.post('/', create)

module.exports = router

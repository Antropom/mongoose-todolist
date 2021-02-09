const express = require('express')
const todoRoute = require('./todo-route')
const router = express.Router()

router.use('/tasks', todoRoute)

module.exports = router

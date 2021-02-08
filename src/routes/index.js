const express = require('express')
const routeSample = require('./route.sample')
const router = express.Router()

router.use('/messages', routeSample)

module.exports = router

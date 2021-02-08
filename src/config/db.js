const mongoose = require('mongoose')
require('dotenv').config()

const { DB_URL } = process.env
mongoose.connect(`mongodb://${DB_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log(`Connected to database`)
})

module.exports = db

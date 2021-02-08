const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    trim: true,
  },
  optional: {
    type: String,
    required: false,
  },
})

messageSchema.methods.log = function () {
  const messageLog = this.optional
    ? this.message + ' optional : ' + this.optional
    : this.message
  console.log(messageLog)
}

const Message = mongoose.model('Message', messageSchema)

module.exports = Message

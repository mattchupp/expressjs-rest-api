const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
  ticket_title: {
    type: String,
    required: true
  },
  ticket_description: {
    type: String,
    required: true
  },
  ticket_creator: {
    type: String,
    required: true
  },
  ticket_owner: {
    type: String,
    default: 'Unassigned'
  },
  ticket_status: {
    type: String,
    default: 'Open'
  }

})

module.exports = mongoose.model('Ticket', ticketSchema)

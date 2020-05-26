const express = require('express')
const cors = require('cors')
const router = express.Router()
const Ticket = require('../models/Ticket')

// Get all Tickets
router.get('/', cors(), async (req, res) => {
  try {
    const tickets = await Ticket.find()
    res.json(tickets)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Get single ticket
router.get('/:id', (req, res) => {

})

// Create new ticket
router.post('/', async (req, res) => {
  const ticket = new Ticket ({
    ticket_title: req.body.ticket_title,
    ticket_description: req.body.ticket_description,
    ticket_creator: req.body.ticket_creator,
  })

  try {
    const newTicket = await ticket.save()
    res.status(201).json(newTicket)
  } catch(err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating a ticket
router.patch('/:id', (req, res) => {

})

// Deleting a ticket
router.delete('/:id', (req, res) => {

})


module.exports = router

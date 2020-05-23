const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 4000;


let tickets = {
  1: {
    id: '1',
    ticket_title: 'Test Ticket',
    ticket_description: 'This is the first test ticket. I am having issues with this',
    ticket_creator: 'Joe Creator',
    ticket_owner: 'Matt C',
    ticket_status: 'Open'
  },
  2: {
    id: '2',
    ticket_title: 'Bug Item 1',
    ticket_description: 'Every time I create a new document it crashes',
    ticket_creator: 'Mary Batman',
    ticket_owner: 'Matt C',
    ticket_status: 'Open'
  },
  3: {
    id: '3',
    ticket_title: 'Fix this please!',
    ticket_description: 'The app crashes each time I try to submit something',
    ticket_creator: 'Marty Byrd',
    ticket_owner: 'Matt C',
    ticket_status: 'Open'
  }
}




app.get('/', (req, res) => res.send('This is the api!'))


app.get('/api/tickets', (req, res) => {
  return res.send(Object.values(tickets));
})

app.get('/api/tickets/:id', (req, res) => {
  return res.send(tickets[req.params.id])
})



app.put('/', (req,res) =>
  res.send('Got a PUT request at /user')
)

app.delete('/user', (req,res) =>
  res.send('Got a DELETE request at /user')
)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

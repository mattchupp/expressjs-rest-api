require('dotenv').config()

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const mongoose = require('mongoose');

const port = 4000;
app.listen(port, () => console.log(`App listening at http://localhost:${port}`))

/*
 * DB Connection
*/
mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true }, function(err) {
  if(err) {
    console.log('Uh oh. Something happened.' + err);
  } else {
    console.log('Wooo!! Database connection established.');
  }
})
const db = mongoose.connection
// db.on('error', (error) => console.error(error));
// db.once('open', () => console.log('Connected to Database'))


app.use(express.json())

/*
 * Set up route for api calls
*/
const ticketsRouter = require('./routes/tickets')
app.use('/tickets', ticketsRouter)

// Dependencies
const express = require('express')
const moment = require('moment')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()
const db = mongoose.connection

// Environment Variables
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/holidays_app'
const PORT = process.env.PORT || 3004

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
  () => console.log('MongoDB connection established:', mongoURI)
)

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Middleware
app.use(express.urlencoded({ extended: false }))// extended: false - does not allow nested objects in query strings
app.use(express.json())// returns middleware that only parses JSON

// Use morgan
app.use(morgan('tiny'))

app.use(express.static('public'))

// Routes
const holidaysController = require('./controllers/holidayController.js')
app.use('/holidays', holidaysController)

// this will catch any route that doesn't exist
app.get('*', (req, res) => {
  res.status(404).json('Sorry, page not found')
})

app.listen(PORT, () => {
  console.log(moment().format('MMMM Do YYYY, h:mm:ss a'), '🎉', 'celebrations happening on port', PORT)
})

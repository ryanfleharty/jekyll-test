require('dotenv').config()
// Dependencies
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const session = require('express-session')
const app = express()

// Configuration
const PORT = process.env.PORT
const mongoURI = process.env.MONGODB_URI

// Middleware
// allows us to use put and delete methods
app.use(methodOverride('_method'))
// parses info from our input fields into an object
app.use(express.urlencoded({ extended: false }))

// configure sessions
// secret is stored in .env - should be unique, should be a secret
// secret provides us with a 'secret handshake' between the browser and the server
// resave and saveUninitialized are required from the docs
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))

// Database
mongoose.connect(mongoURI, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})

// Routes
app.get('/', (req, res) => {
  res.render('index.ejs', {
    currentUser: req.session.currentUser
  })
})

app.get('/app', (req, res) => {
  if (req.session.currentUser) {
    res.render('app/index.ejs')
  } else {
    res.redirect('/sessions/new')
  }
})

// will/would be the 7 restful routes
const userController = require('./controllers/users_controller.js')
app.use('/users', userController)

// sessions this will not be all 7 restful routes this is a little different of a pattern
const sessionsController = require('./controllers/sessions_controller.js')
app.use('/sessions', sessionsController)

// Listen
app.listen(PORT, () => {
  console.log('auth happening on port', PORT)
})

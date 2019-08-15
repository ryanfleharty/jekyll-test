const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')

// log in form
sessions.get('/new', (req, res) => {
  res.render('sessions/new.ejs')
})

// create a new session
sessions.post('/', (req, res) => {
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (!foundUser) {
      res.send('user not found!')
      // console.log(req.body.password, foundUser)
      // from input in browser === found from database
    } else if (bcrypt.compareSync(req.body.password, foundUser.password)) {
      if (err) console.log(err)
      req.session.currentUser = foundUser
      res.redirect('/')
    } else {
      res.send('<a href="/">Wrong Password</a>')
    }
  })
})

// destroy the session
sessions.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})

module.exports = sessions

const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')

users.get('/new', (req, res) => {
  res.render('users/new.ejs')
})

users.post('/', (req, res) => {
  // overwrite the user password wtiht he hashed password and pass that in to our database
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createdUser) => {
    if (err) {
      console.log(err)
    } else {
      console.log(createdUser)
      res.redirect('/')
    }
  })
})

module.exports = users

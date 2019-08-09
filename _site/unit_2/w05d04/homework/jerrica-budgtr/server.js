// ======================================
// DEPENDENCIES
// ======================================
const express = require('express')
const app = express()
const budget = require('./models/budget.js')

// ======================================
// MIDDLEWARE & MODELS
// ======================================
// body parser
app.use(express.urlencoded({ extended: false }))
// static files
app.use(express.static('public'))

// ======================================
// ROUTES
// ======================================
// index route
app.get('/', (req, res) => {
  // initialize the bankAccount variable
  let bankAccount = 0
  // loop through the budget to calculate the bankAccount
  for (let budgetItem of budget) {
    console.log(budgetItem)
    bankAccount += budgetItem.amount
  }
  console.log(bankAccount)
  // render the page
  res.render('index.ejs', {
    budgetData: budget,
    bankAccount: bankAccount
  })
})

// new route
app.get('/new', (req, res) => {
  res.render('new.ejs')
})

// show route
app.get('/item/:index', (req, res) => {
  res.render('show.ejs', {
    ledgerItem: budget[req.params.index]
  })
})

// post route
app.post('/new', (req, res) => {
  // changing amount to be a number instead of a string
  req.body.amount = parseInt(req.body.amount)
  // changing tags to be an array instead of a string
  req.body.tags = req.body.tags.split(',')
  budget.push(req.body)
  res.redirect('/')
})

// ======================================
// LISTENER
// ======================================
app.listen(3000, () => {
  console.log('listening on port 3000')
})

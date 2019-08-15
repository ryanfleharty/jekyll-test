// ======================
// DEPENDENCIES
// ======================
const express = require('express')
const app = express()
const port = 3000

// ======================
// ROUTES
// ======================
// get index route
app.get('/', (req, res) => {
  res.send(`
    <h1>99 Bottles of beer on the wall</h1>
    <a href="/98">take one down, pass it around</a>
  `)
})

// get other bottles route
app.get('/:number_of_bottles', (req, res) => {
  if(parseInt(req.params.number_of_bottles) === 0) {
    res.send(`
      <h1>No more bottles of beer on the wall</h1>
      <a href="/">... but i want more</a>
    `)
  } else {
    res.send(`
      <h1>${req.params.number_of_bottles} bottles of beer on the wall</h1>
      <a href="${req.params.number_of_bottles - 1}">take one down, pass it around</a>
    `)
  }
})

// ======================
// LISTENER
// ======================
app.listen(port, () => {
  console.log('listening on port: ', port)
})

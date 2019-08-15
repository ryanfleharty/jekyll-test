// Dependencies
const express = require('express')
// make shorthand for express() set to app
const app = express()

// express, listen for a get request to localhost:3000 or localhost:3000/
// callback, two arguments first request, second is resposnse
// upon a request to localhost:3000, response send
// send the string 'Hello World'
app.get('/', (req, res) => {
  console.log('I got your request, sending you a response')
  res.send('Hello World!')
})

app.get('/alldata', (request, response) => {
  response.send('here is ALL your information')
})

// start the server, make it listen for requests at
// http://localhost:3000
app.listen(3000, () => {
  console.log('I am listening for requests!!!')
})

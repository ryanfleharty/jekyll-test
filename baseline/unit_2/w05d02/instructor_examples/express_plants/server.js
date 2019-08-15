// Dependencies
const express = require('express')
const app = express()

// Configurations
const port = 3000

// 'Data'
const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter"]

// Routes
app.get('/', (req, res) => {
  res.send(plants)
})

app.get('/awesome', (req, res) => {
  res.send(`
  <h1>Plants are awesome!</h1>
  <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
`)
})

app.get('/:indexOfPlantsArray', (req, res) => {
  if (plants[req.params.indexOfPlantsArray]) {
    res.send(plants[req.params.indexOfPlantsArray])
  } else {
    res.send('No plants at this index: ' + req.params.indexOfPlantsArray)
  }
})

app.get('/hello/:firstname/:lastname', (req, res) => {
  console.log('=========================================')
  console.log('This is the entire Request Object sent from the browser to the server: ')
  console.log(req)
  console.log('========================================')
  res.send(`Hello ${req.params.firstname} ${req.params.lastname}`)
})

app.get('/howdy/:firstname', (req, res) => {
  console.log(req.params)
  console.log(req.query)
  res.send(`howdy ${req.query.title} ${req.params.firstname}`)
})
// listner
app.listen(port, () => {
  console.log('listening on port', port)
})

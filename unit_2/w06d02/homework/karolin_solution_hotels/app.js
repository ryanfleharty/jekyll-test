// dependencies
const mongoose = require('mongoose')
const Hotel = require('./models/hotel.js')
const hotelSeed = require('./models/seed.js')

// configuration
const mongoURI = 'mongodb://localhost:27017/' + 'hotel'
const db = mongoose.connection

// open connection
mongoose.connect(mongoURI, { useNewUrlParser: true })

// error/success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))
db.on('open', () => {
  console.log('Connection made')
})

// Hotel.create(hotelSeed, (err, data) => {
//   if (err) console.log(err)
//   console.log('added provided hotel data', data)
// })

// Hotel.collection.drop()

// Hotel.countDocuments({} , (err , data)=> {
//    if ( err ) console.log( err.message );
//     console.log ( `There are ${data} hotels in this database` );
// });

Hotel.find({ vacancies: true }, '-rating', (err, hotels) => {
  if (err) console.log(err)
  console.log(hotels)
})

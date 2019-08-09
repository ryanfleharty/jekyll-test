const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));

const fruitsController = require('./controllers/fruits.js');
app.use('/fruits', fruitsController);

app.listen(3000, () => {
    console.log('listening...');
});
mongoose.connect('mongodb://localhost:27017/basiccrud', {useNewUrlParser:true});
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

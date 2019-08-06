const Product = require('./index.js');
const mongoose = require('mongoose');
const data = require('../data.json');

const seed = () => {
  Product.insertMany(data)
    .then(() => console.log('data seeded'))
    .then(() => mongoose.connection.close())
    .catch(err => console.error(err))
}

seed()
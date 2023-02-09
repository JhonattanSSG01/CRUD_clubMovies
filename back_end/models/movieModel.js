const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieModel = new Schema({
  title: { type: String},
  director: { type: String},
  duration: { type: String},
  country: { type: String},
  age: { type: String},
  language: { type: String},
  premiere: { type: String}
},
{
  collection: 'prueba'
});

module.exports = mongoose.model('movies', movieModel);
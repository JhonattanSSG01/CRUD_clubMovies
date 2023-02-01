const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieModel = new Schema({
  title: { type: String},
  age: { type: String},
  duration: { type: String},
  language: { type: String},
  premiere: { type: String},
  country: { type: String},
  director: { type: String},
});

module.exports = mongoose.model('movies', movieModel);
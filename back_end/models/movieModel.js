const mongoose = require('mongoose');//Trae mongoDb a nuestro proyecto
const Schema = mongoose.Schema;//Definimos el esquema para que lo guarde por coleccion

const movieModel = new Schema({//El nuevo esquema que es otra coleccion y definimos las claves por propiedad type que tendra como valor strings
  title: { type: String},
  age: { type: String},
  duration: { type: String},
  language: { type: String},
  premiere: { type: String},
  country: { type: String},
  director: { type: String},
});

module.exports = mongoose.model('movies', movieModel);//Exporta el tipo de model que es identificado como "movies" del archivo movieModel.
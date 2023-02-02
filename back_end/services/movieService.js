const movieModel = require('../models/movieModel');//Se trae el esquema de movie

class MovieServices {
  constructor(){
  }

  async create(data){//Creamos un nuevo model 
    const newMovie = new movieModel(data);
    try {
      const res = await newMovie.save()
      return newMovie;
    } catch (error) {
      throw error;
    }
  }

  async find(query){//Objeto donde se hara la consulta al esquema
    try {
      return movieModel.find(query);
    } catch (error) {
      throw error;
    }
  }
  async findOne(id){}//Objeto donde se busca por id
  async update(id, changes){}//Objeto donde se busca por 
  async delete(id){//Objeto delete donde entra en el esquema y elimina por typo id
    try {
      await movieModel.deleteOne({ _id: id });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = MovieServices;
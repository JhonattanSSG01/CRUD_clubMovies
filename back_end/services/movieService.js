/* const movieModel = require('../models/movieModel');

class MovieServices {
  constructor(){
  }

  async create(data){
    const newMovie = new movieModel(data);
    try {
      const res = await newMovie.save()
      return newMovie;
    } catch (error) {
      throw error;
    }
  }

  async find(query){
    try {
      return movieModel.find(query);
    } catch (error) {
      throw error;
    }
  }
  async findOne(id){}
  async update(id, changes){}
  async delete(id){
    try {
      await movieModel.deleteOne({ _id: id });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = MovieServices; */
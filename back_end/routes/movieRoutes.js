const router = require("express").Router(); // Importamos el modulo de las rutas que tendra la app
const Movie = require('../models/movieModel'); // Importamos el modelo de la DB

// router.get('/test', (request, response) => {
//   response.end('Saludo desde la prueba');
// });

// Ruta y EndPoint para capturar datos y agregar a la DB
//Agregar usuario
router.post('/addUser', (request, response) => {
  const newUser = new Movie({
    title: request.body.title,
    director: request.body.director,
    duration: request.body.duration,
    country: request.body.country,
    year: request.body.year,
    language: request.body.language,
    premiere: request.body.premiere
  })
  newUser.save((err) => {
    if (!err) {
      response.send('Usuario agregado correctamente')
    } else {
      response.send(err)
    }
  })
});

//Listar Usuarios
router.get('/header', (request, response) => {
  Movie.find({}, (docs, err) => {
    if (!err) {
      response.send(docs)
    } else {
      response.send(err)
    }
  })
});

//Editar Usuario
router.post('/header/edit', (request, response) => {

  Movie.find({ id: request.params.id }, (docs, err) => {
    if (!err) {
      response.send(docs)
    } else {
      response.send(err)
    }
  })
});

//Actualizar Usuario
router.post('/header/actualizarUsuario', (request, response) => {
  Movie.findOneAndUpdate({ id: request.body.id }, {
    title: request.body.title,
    director: request.body.director,
    duration: request.body.duration,
    country: request.body.country,
    year: request.body.year,
    language: request.body.language,
    premiere: request.body.premiere
  }, (err) => {
    if (!err) {
      response.send('Usuario actualizado')
    } else {
      response.send(err)
    }
  })
});

//Borrar Usuario
router.delete('/header/borrarUsuario', (request, response) => {
  Movie.findOneAndDelete({ id: request.body.id }, (err) => {
    if (!err) {
      response.send('Usuario borrado')
    } else {
      response.send(err)
    }
  })
});


module.exports = router;


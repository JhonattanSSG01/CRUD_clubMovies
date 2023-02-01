/* const express = require('express');
const cors = require('cors')
const MovieServices = require('./services/movieService');

const app = express();

app.use(express.json());


// permitir que urls pueden conectarse por medio de cors
const whitelist = [
  'http://localhost:3000',
  'http://myapp.co',
];

const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    }
    else{
      callback(new Error('no permitido'))
    }
  }
}
app.use(cors(options))


const port = 5000

const connection = require('./mondoDB');
const movieService = new MovieServices()

app.get('/', (request, response) => {
  response.end('Bienvenidos al servidor Backend corriedno....');
})

app.get('/movies', async (req, res) => {
  try {
    const data = await movieService.find(req.query);
    res.send(data);
  } catch (error) {
    res.send({ error: 'ocurrio un error'})
  }
});

app.post('/movie', async (req, res) => {
  try {
    const data = await movieService.create(req.body);
    res.send(data);
  } catch (error) {
    res.send({ error: 'ocurrio un error'})
  }
});

app.delete('/movie/:id', async (req, res) => {
  try {
    await movieService.delete(req.params.id);
    res.send({ message: 'item Eliminado'});
  } catch (error) {
    res.send({ error: 'ocurrio un error'})
  }
});


app.listen(port, function () {
  console.log(`The server is running in the port ${port}`);
}) */
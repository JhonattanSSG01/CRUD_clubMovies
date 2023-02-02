const express = require('express');
const cors = require('cors')
const MovieServices = require('./services/movieService');// Traemos el archivo que esta conectado por el schema

const app = express();

app.use(express.json());




app.listen(port, function () {
  console.log(`The server is running in the port ${port}`);
})
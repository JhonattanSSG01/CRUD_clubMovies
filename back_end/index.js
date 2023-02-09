//
const express = require('express'); // Importamos los modulos de la libreria
const app = express(); // Se le asigna un nombre a express para usar sus metodos
const PORT = process.env.PORT || 3030; // Declaramos el puerto default en donde correra el servidor

const cors = require('cors');
app.use(cors());// Use the security mechanism for the app.


// Conexion a la DB de MongoDB
const mongoose = require('mongoose'); // Importamos los modulos de mongoose para la conexion con la DB
const URI = 'mongodb+srv://movie:1234@movie.qon2fip.mongodb.net/?retryWrites=true&w=majority'; // Url de la conexion con la DB
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(URI, options);// Nos conectamos a la DB

const connection = mongoose.connection;

// Verificamos si se conecta correctamente con el metodo on sobre la conection a la DB
connection.on('connected', () => {
  console.log('Conexion correcta con la base de datos');
});
connection.on('error', () => {
  console.log('Conexion incorrecta con la base de datos');
});

module.exports = mongoose; // Exportamos todo el modulo

// Configuraacion del body parser que nos ayuda para acceder a la info de los form
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: 'true' }));

// Importacion del modelo de la DB
const routesUsuario = require('./routes/movieRoutes');
app.use('/api/user', routesUsuario);// Ruta principal

// Endpont get
app.get('/', (resquest, response) => {
  response.send('Servidor Node JS');// Nos devuelve la respuesta del metodo
})

//Configurar server basico
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`)
});
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://movie:1234@movie.qon2fip.mongodb.net/?retryWrites=true&w=majority');

const objectDB = mongoose.connection

objectDB.on('connected', () => { console.log('Conexion correcta a MongoDB') });
objectDB.on('error', () => { console.log('Error en la conexion a MongoDB') });

module.exports = mongoose;
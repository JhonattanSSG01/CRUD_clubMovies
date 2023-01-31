const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Crud:123321@cluster0.uvngqrp.mongodb.net/?retryWrites=true&w=majority');

const objectDB = mongoose.connection

objectDB.on('connected', () => { console.log('Conexion correcta a MongoDB') });
objectDB.on('error', () => { console.log('Error en la conexion a MongoDB') });

module.exports = mongoose;
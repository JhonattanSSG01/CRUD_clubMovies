const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Crud:123321@cluster0.uvngqrp.mongodb.net/?retryWrites=true&w=majority');

mongoose.connect('mongodb+srv://movie:1234@movie.qon2fip.mongodb.net/?retryWrites=true&w=majority');


/*const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crud');


const objectDB = mongoose.connection

objectDB.on('connected', () => { console.log('Conexion correcta a MongoDB') });
objectDB.on('error', () => { console.log('Error en la conexion a MongoDB') });

module.exports = mongoose;*/
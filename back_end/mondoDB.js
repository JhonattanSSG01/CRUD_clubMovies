const mongoose = require('mongoose');
<<<<<<< HEAD
mongoose.connect('mongodb+srv://Crud:123321@cluster0.uvngqrp.mongodb.net/?retryWrites=true&w=majority');
=======
mongoose.connect('mongodb+srv://movie:1234@movie.qon2fip.mongodb.net/?retryWrites=true&w=majority');
>>>>>>> 51a6d684f3e52126846d3a6982897e8633c0462a

const objectDB = mongoose.connection

objectDB.on('connected', () => { console.log('Conexion correcta a MongoDB') });
objectDB.on('error', () => { console.log('Error en la conexion a MongoDB') });

module.exports = mongoose;
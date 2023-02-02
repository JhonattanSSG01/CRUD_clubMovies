const express = require('express');
const app = express();
const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt');
const PORT = process.env.PORT || 5000;
app.use(express.json());
const cors = require("cors");
app.use(cors());
const jwt = require("jsonwebtoken");
const JWT_SECRET = "qkndakwlnciuebfoueqafbejnfÍ31679+-5[]S;'ssdcpqeowihruiwehruyegfcbjtmrnu5yht98wsdnjSNug`1`{}072";
const bp = require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const mongo_uri = 'mongodb+srv://movie:1234@movie.qon2fip.mongodb.net/?retryWrites=true&w=majority';
//Validating database connection
mongoose
    .connect(mongo_uri,{
        useNewUrlParser : true,
        useUnifiedTopology: true
    })
    .then(() =>{
        console.log('Successfully connected');
    })
    .catch((e) => console.log(e));

//Importing user.js
require("./userDetails.js");
//Access to model
const User = mongoose.model("UserInfo")
//Number of time to crypt
const saltRounds = 10;
//Creating a New User en MongoDB
app.post("/signin", async(req, res) => { 
    const {setName, setLastname, setEmail, setUsername, setPassword} = req.body;
    console.log("Hoolaa");
    const encryptedPassword = await bcrypt.hash(setPassword, saltRounds);
    try {
        const oldUser = await User.findOne({ username:req.body.setUsername});
        if(oldUser){
            return res.send({ error: "User Exists"});
        }
        await User.create({
            setName,
            setLastname,
            setEmail,
            setUsername,
            setPassword: encryptedPassword,
        });
        res.send({status:"ok"});
    } catch (error) {
        res.send({status:"Error No Register"});
    }
});
//Login data
app.post("/login-user", async(req, res) => {
    const { username, password} = req.body;
    //Checking if username exist
    const user = await User.findOne({username});
    if(!user){
        return res.send({ error: "User Not Found!"});
    }
    //Checking password
    if(await bcrypt.compare(password, User.password)){
        const token = jwt.sign({username : User.username}, JWT_SECRET);
        
        if(res.status(201)){
            return res.json({status: "ok", data: token})
        }else{
            return res.json({error: "error"})
        }
    }
    res.json({status:"error", error:"Invalid Password"})
})

app.post("/dataMovie", async(res, req) => {
    const{token} = req.body;
    try {
        //Token true
        const user = jwt.verify(token, JWT_SECRET);
        console.log(user)
        const useremail = user.username;
        User.findOne({username: useremail}).then((data) =>{
            res.send({status:"ok", data: data});
        }).catch((error) =>{
            res.send({error:"error"});
    });
    } catch (error) {
}});

// permitir que urls pueden conectarse por medio de cors
const whitelist = [//Conexion para conectar el servidor al backend 
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
const movieService = new MovieServices()//Se crea nuevas funcionalidades

app.get('/', (request, response) => {
  response.end('Bienvenidos al servidor Backend corriedno....');
})

app.get('/movies', async (req, res) => {//
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

app.listen(PORT, () => {
    console.log('Server Started');
});

module.exports = app;
const express = require('express');
const app = express();
const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt');
const PORT = process.env.PORT || 5000;
app.use(express.json());
const cors = require("cors");
app.use(cors());
const jwt = require("jsonwebtoken");
const JWT_SECRET = "qknd;kwlnciuebfoueqafbejnfÍ351679+-5[]S;'ssdcpqeowihruiwehruyegfcbjtmrnu5yht98wsdnjSNug`1`{}072";

const mongo_uri = 'mongodb+srv://movie:1234@movie.qon2fip.mongodb.net/?retryWrites=true&w=majority';
//Validating database connection
mongoose
    .connect(mongo_uri,{
        useNewUrlParser : true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() =>{
        console.log('Successfully connected');
    })
    .catch((e) => console.log(e));

//Importing user.js
require("./user");
//Access to model
const User = mongoose.model("UserInfo")
//Creating a New User en MongoDB
app.post("/Sign", async (req, res) => { 
    const {name, lastname, email, username, password} = req.body;
    try {
        const oldUser =await User.findOne({username});
        const encryptedPassword = await bcrypt.hash(password, 10)
        if(oldUser){
            return res.send({ error: "User Exists"});
        }
        await User.create({
            name,
            lastname,
            email,
            username,
            password: encryptedPassword,
        });
        res.send({status:'ok'})
    } catch (error) {
        res.send({status:"error no register"});
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
app.listen(PORT, () => {
    console.log('Server Started');
});

module.exports = app;
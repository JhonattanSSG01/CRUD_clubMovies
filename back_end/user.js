const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

//Creating Schema
const UserDetailsShema = new Schema({
    name : { type:String, required:true},
    lastname : { type:String, required:true},
    email : { type:String, required:true, unique:true},
    username : { type:String, required:true, unique:true},
    password : { type:String, required:true}
},
{
    collection : "UserInfo"
});

//Number of time to crypt
const saltRounds = 10;
//Create Schema
/*const UserShema = new mongoose.Schema({
    username : { type:String, required:true, unique:true},
    password : { type:String, required:true}
});*/
//This Function Executed Before Saving Changes
/*UserShema.pre('save', function(next){
    if(this.isNew || this.isModified('password')){
        const document = this;
        //Encrypting Password Using Hash
        bcrypt.hash(document.password, saltRounds, (err, hashedPassword) => {
            if(err){
                next(err);
            }else{
                document.password = hashedPassword;
                next();
            }
        })
    }else{
        next();
    }
});

//Comparing

UserShema.method.isCorrectPassword = function(password, callback){
    bcrypt.compare(password, this.password, function(err, same){
        if(err){
            callback(err);
        }else{
            callback(err, same);
        }
    });
}*/

//mongoose.exports = mongoose.model('User', UserShema);

//Create a Model
module.exports = mongoose.model('UserInfo', UserDetailsShema);
const mongoose = require("../database");
const passportLocalMongoose = require('passport-local-mongoose');
// create an schema

var userSchema = mongoose.Schema({
            name: String,
            password: String,
            email:String
        });
 
// userSchema.plugin(passportLocalMongoose);        
 module.exports = mongoose.model('users',userSchema);
 
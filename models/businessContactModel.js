const mongoose = require("../database");
const passportLocalMongoose = require('passport-local-mongoose');
// create an schema

var contactSchema = mongoose.Schema({
            name: String,
            number : Number,
            email:String
        });
 
// userSchema.plugin(passportLocalMongoose);        
 module.exports = mongoose.model('contacts',contactSchema);
 
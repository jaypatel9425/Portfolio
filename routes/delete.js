'use strict'

const express = require('express')
const router = express.Router()
const User = require('../models/userModel');
const Contact = require('../models/businessContactModel');
const bodyParser = require("body-parser");

// get project page
  router.get('/(:id)', function(req, res, next) {
    User.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
        console.log("delete")
       
        Contact.find((err, data) => {
            if(!err){
                res.redirect('/login/businessContactsList');
            }
            else{
                res.redirect('/login/businessContactsList');
            }
        }); 
        
    } else {
        console.log("error")
    }
    });
})

module.exports = router;
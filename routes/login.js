'use strict'

const express = require('express')
const router = express.Router()
var mongoose = require('mongoose');
const User = require('../models/userModel');
const Contact = require('../models/businessContactModel');
// var passport = require("passport");

// get contact page
router.get('/', (req, res) => {
    res.render('pages/login')
})

router.post('/businessContactsList', (req, res) => {
    User.findOne({email : req.body.email})
    .exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (!user) {
            return res.redirect('/login');
            // return res.status(404).send({ message: "User Not found." });
          }
        if(user)
        {
            var passwordIsValid = ( req.body.password == user.password) ? true : false;
            if(passwordIsValid){ 
                Contact.find((err, data) => {
                    if(!err){
                        res.render('pages/businessContactsList', {data : data});
                    }
                    else{
                        res.render('pages/businessContactsList')
                    }
                });    
            } 
           else{
                return res.redirect('/login');
                // return res.status(401).send({ message: "Invalid Password!" });
           }
        }  
    }) 
          
});

module.exports = router;
'use strict'

const express = require('express')
const router = express.Router()
const User = require('../models/userModel');

// get project page
  router.get('/(:id)', function(req, res, next) {
    User.findById(req.params.id, (err, doc) => {
    if (!err) {
        res.render("pages/update", {
        data: doc
    });
    } else {
        console.log(err)
        // req.flash('error', 'User not found with id = ' + req.params.id)
        res.redirect('/businessContactsList');
    }
    });
})

module.exports = router;
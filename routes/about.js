'use strict'

const express = require('express') 
const router = express.Router()

// get aboutme page
router.get('/', function(req, res, next) {
    res.render('pages/about', { 
      title: 'About',
      userName: 'Jay'  });
  });

module.exports = router;
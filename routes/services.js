'use strict'

const express = require('express')
const router = express.Router()

// get services page
router.get('/', function(req, res, next) {
    res.render('pages/services', { 
      title: 'Services',
      userName: 'Jay'  });
  });

module.exports = router;
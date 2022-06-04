'use strict'

const express = require('express')
const router = express.Router()

// get project page
router.get('/', function(req, res, next) {
    res.render('pages/projects');
  });

module.exports = router;
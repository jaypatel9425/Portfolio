'use strict'

const express = require('express')
const router = express.Router()

// get contact page
router.get('/', (req, res) => {
    res.render('pages/contact')
})

module.exports = router;
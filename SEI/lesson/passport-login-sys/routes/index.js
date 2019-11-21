const express = require('express')
const router = express.Router()
//Welcome
router.get('/', (req, res) => res.render('welcome'))

// Dashboard (6-auth)
router.get('/dashboard', (req, res) => res.render('dashboard'))


module.exports = router
const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/')
router.get('/api/frontend')
router.get('/api/backend')
router.get('/api/data')
router.get('/search')
router.get('/api/detail/:id')
module.exports = router;
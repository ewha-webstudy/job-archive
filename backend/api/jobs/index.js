const express = require('express');
const path = require('path');
const jobsCtrl = require('./jobs.ctrl');

const router = express.Router();

// API 정의서 (method 불확실)
router.get('/', jobsCtrl.main)
router.get('/frontend', jobsCtrl.frontendList)
router.get('/backend', jobsCtrl.backendList)
router.get('/data', jobsCtrl.dataList)
router.get('/tags', jobsCtrl.tagSearch)
router.get('/search', jobsCtrl.textSearch) // -> POST?
router.get('/:id', jobsCtrl.detail)

router.post('/like/:id', jobsCtrl.like)
router.post('/unlike/:id', jobsCtrl.unlike)

module.exports = router;
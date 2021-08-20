const express = require('express');
const path = require('path');
const jobsCtrl = require('./jobs.ctrl');

const router = express.Router();

// API 정의서 (method 불확실)
router.get('/main', jobsCtrl.main)
router.get('/jobs/:id', jobsCtrl.detail)

// router.post('/category/:category', jobsCtrl.category)
// params: category
// body: sort 기준
router.post('/category/:category/search', jobsCtrl.search)
// params: category
// body: sortBy, tags, searchBar
// 추가해야할 body: limit, skip (pagination)
router.post('/like/:id', jobsCtrl.like)
router.post('/unlike/:id', jobsCtrl.unlike)

module.exports = router;


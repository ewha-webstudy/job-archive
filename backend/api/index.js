const express = require('express');

const router = express.Router();

const jobs = require('./jobs');
const members = require('./members');

router.use('/jobs', jobs);
router.use('/members', members);

module.exports = router;

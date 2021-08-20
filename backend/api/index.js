const express = require('express');

const router = express.Router();

const jobs = require('./jobs/jobs.ctrl');
const members = require('./members/members.ctrl');

router.use('/jobs', jobs);
router.use('/members', members);

module.exports = router;
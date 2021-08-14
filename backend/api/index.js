"use strict";

const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");

const jobs = require('./jobs');
const members = require('./members');

router.use('/', jobs);
router.use('/', members);

module.exports = router;
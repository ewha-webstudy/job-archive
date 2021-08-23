"use strict";

const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");

const jobs = require('./jobs');
<<<<<<< HEAD
// const members = require('./members');

router.use('/', jobs);
// router.use('/', members);
=======
const members = require('./members');

router.use('/', jobs);
router.use('/', members);
>>>>>>> backend/userapi

module.exports = router;
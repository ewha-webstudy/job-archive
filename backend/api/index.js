"use strict";

const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");

//const home = require("./src/routes/home");

const jobs = require('./jobs');
const members = require('./members');


router.use('/jobs', jobs);
router.use('/members', members);


module.exports = router;
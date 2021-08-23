"use strict";
const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require("body-parser");
const path = require('path');
const { swaggerUi, specs } = require("./modules/swagger");
const { sequelize } = require('./models');

const app = express();

sequelize.sync();

const api = require('./api');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
  require('dotenv').config();

app.set('port', 3001);
  
app.use(cookieParser(process.env.COOKIE_ID));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "./src/views"); 
app.set("view engine", "ejs"); 
app.use(express.static(`${__dirname}/public`));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/api',api);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(app.get('port'), () => {
    console.log(`http://localhost:${app.get('port')}`);
  });
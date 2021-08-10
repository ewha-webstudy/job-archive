"use strict";
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const api = require('./api/members');
const PORT = 3000;


app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", api);
app.use('/api', api);


app.listen(PORT, () =>{
    console.log("서버 가동");
}); 

module.exports = app;

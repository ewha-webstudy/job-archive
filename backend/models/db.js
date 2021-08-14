"use strict";
const mysql = require("mysql");

// 우선 localhost로 mysql 연동
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "0000",
    database: "membership"
});
db.connect();

module.exports = db;
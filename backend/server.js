const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// const morgan = require('morgan');
// const hpp = require('hpp');
// const helmet = require('helmet');
const path = require('path')

const app = express();

const api = require('./api');

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
// app.use(
//   session({
//     resave: false,
//     saveUninitialized: false,
//     secret: process.env.SESSION_ID,
//     cookie: {
//       httpOnly: true,
//     },
//   })
// );
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api);

app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
});

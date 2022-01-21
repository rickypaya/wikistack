const express = require('express');
const morgan = require('morgan');

const app = express();
//npm init - itializing package.json

//logging info ab each incoming request
app.use(morgan('dev'));

//serving static files from public
app.use(express.static(__dirname + "/public"));

//body parser
app.use(express.urlencoded({ extended: false }));
//app.use(express.json());


app.get('/', (req, res) => {
  res.send("Hello World");
});

const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout');
const { db, Page, User } = require('./models');

const PORT = 3000;
const app = express();
//npm init - itializing package.json

//verify the connection to db
db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

//logging info ab each incoming request
app.use(morgan('dev'));

//serving static files from public
app.use(express.static(__dirname + "/public"));

//body parser
app.use(express.urlencoded({ extended: false }));
//app.use(express.json());


app.get('/', (req, res) => {
  res.send(layout());
});

const connector = async () => {
  try{

    await db.sync({force:true});

    app.listen(PORT, () => {
      console.log(`App Listening in port: ${PORT}`);
    })

  }catch(err){
    console.log(err);
  }
}

connector();


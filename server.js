const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 3000;

//Initialize
const app = express();
//const router = express.Router();
var router = require('./server/routes');

app.use(router, function (err, req, res, next) {
  // handle api errors here
  console.log(err.message || err);
  console.log(err.stack || err);
  res.status(err.statusCode || err.status || 500).send(err.message || err);
});


/* var router = express.Router();

router.get('/', (requ, response) => {
  response.status(200).send({message: 'Hello World!'})
});

app.use(router); */

//connect database
const mongoURL = "mongodb://localhost:27017/drivercheck";

mongoose.connect(mongoURL, function (err, db) {
  if(err) throw err;
});

app.listen(port);





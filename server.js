const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 3000;

//Initialize
const app = express();
const router = express.Router();

//connect database
const mongoURL = "mongodb://localhost:27017/drivercheck";

mongoose.connect(mongoURL, function (err, db) {
  if(err) throw err;
});

app.listen(port);





var express = require('express');
var router = express.Router();

function index(req,res) {
  res.send({message:'Company name'});
  }

router.get('/', index)

module.exports = router;
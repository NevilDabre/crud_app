var express = require('express');
var router = express.Router();

function index(req,res) {
  res.send('hello from test page');
}

router.get('/', index);

module.exports = router;
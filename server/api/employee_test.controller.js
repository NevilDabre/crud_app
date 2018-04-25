var express  = require('express');
var router = express.Router();

function index (req,res ) {
  res.send('employee test');
}

router.get('/', index)

module.exports = router;
var express = require('express');

var router = express.Router();

router.get('/', function(req,res){
  res.status(200).send({message: 'Hello World!'});
});

router.use( '/company', require('./api/company.controller'));

router.use('/employee', require('./api/employee.controller'));

router.use('/employee_test', require('./api/employee_test.controller'));

router.use('/test', require('./api/test.controller'));

module.exports = router;
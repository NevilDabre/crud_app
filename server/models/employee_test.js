var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeTestSchema = new Schema({
  result: Boolean,
  employee_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  },
  test_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Test'
  }
})

var EmployeeTest = mongoose.model('EmployeeTest');

module.exports = EmployeeTest;
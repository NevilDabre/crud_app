import { mongo } from "mongoose";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var employeeSchema = new Schema({
  name: String,
  department: String,
  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  }
})

var Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new Schema({
  name: String,
  address: String
})

var Company = mongoose.model('Company', companySchema);

module.exports = Company;
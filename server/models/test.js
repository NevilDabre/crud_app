var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var testSchema = new Schema({
  name: String,
  description: String
})

var Test = mongoose.model('Test', testSchema);

module.exports = Test;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Category = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  }
});

module.exports = mongoose.model('category', Category);

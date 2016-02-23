// REQUIREMENTS
var mongoose = require('mongoose');

// SCHEMA
var blogSchema = mongoose.Schema({
  imglink: String,
  comments: String,
});

// EXPORT
module.exports = mongoose.model('Blog', blogSchema);

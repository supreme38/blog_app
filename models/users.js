// REQUIREMENTS
var mongoose = require('mongoose');
var blogSchema = require('./blogs').schema;
var bcrypt = require('bcrypt-nodejs');

// SCHEMA
var userSchema = mongoose.Schema({
	username: String,
	email: String,
	password: String,
	blogs: [blogSchema]
});

// PASSPORT
userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

// EXPORT
module.exports = mongoose.model('User', userSchema);

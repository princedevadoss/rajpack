let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let adminSchema = new Schema({
  username: String,
  password: String
});

// the schema is useless so far
// we need to create a model using it
let Admin = mongoose.model('auths', adminSchema);

// make this available to our users in our Node applications
module.exports = Admin;
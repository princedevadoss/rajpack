let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let companySchema = new Schema({
  aboutus: Array,
  machinery: Array,
  customers: Array
});

// the schema is useless so far
// we need to create a model using it
let Company = mongoose.model('company_details', companySchema);

// make this available to our users in our Node applications
module.exports = Company;
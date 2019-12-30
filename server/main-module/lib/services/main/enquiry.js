let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let enquirySchema = new Schema({
  name: String,
  email: String,
  contact: String,
  message: String
});
let Enquiry = mongoose.model('enquiries', enquirySchema);
module.exports = Enquiry;
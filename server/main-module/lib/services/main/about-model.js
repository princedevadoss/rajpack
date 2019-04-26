let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let aboutSchema = new Schema({
  img: {
      data: Buffer,
      contentType: String
  },
  aid: Number
});

// the schema is useless so far
// we need to create a model using it
let About = mongoose.model('about_images', aboutSchema);

// make this available to our users in our Node applications
module.exports = About;
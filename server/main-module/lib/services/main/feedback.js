let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let feedbackSchema = new Schema({
  email: String,
  comment: String
});
let Feedback = mongoose.model('feedbacks', feedbackSchema);
module.exports = Feedback;
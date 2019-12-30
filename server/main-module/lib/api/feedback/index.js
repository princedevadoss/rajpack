let feedbackController = require('./controller');
let express = require('express');
let router = new express.Router();

router.post('/feedback', feedbackController.addFeedback);

module.exports = router;
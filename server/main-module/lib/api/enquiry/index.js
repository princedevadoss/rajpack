let enquiryController = require('./controller');
let express = require('express');
let router = new express.Router();

router.post('/enquiry', enquiryController.addEnquiry);

module.exports = router;
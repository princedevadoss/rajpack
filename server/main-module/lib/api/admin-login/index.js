let adminLoginController = require('./controller');
let express = require('express');
let router = new express.Router();

router.post('/admin/login', adminLoginController.checkauth);

module.exports = router;
let express = require('express');
let main = require('./main');
let admin = require('./admin-login');
let MainRouter = new express.Router();
MainRouter.use('/api', main);
MainRouter.use('/api', admin);
module.exports = MainRouter;
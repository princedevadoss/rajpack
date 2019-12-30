let express = require('express');
let main = require('./main');
let admin = require('./admin-login');
let feedback = require('./feedback');
let MainRouter = new express.Router();
MainRouter.use('/api', main);
MainRouter.use('/api', admin);
MainRouter.use('/api', feedback);
module.exports = MainRouter;
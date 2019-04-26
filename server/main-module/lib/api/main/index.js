let mainController = require('./controller');
let express = require('express');
let router = new express.Router();

router.get('/aboutus', mainController.getContent);
router.get('/aboutus/images', mainController.getAboutImages);
router.put('/aboutus', mainController.putContent);

module.exports = router;
let serviceMongoose = require('../../services/main');
let company = require('../../services/main/model');
let aboutImages = require('../../services/main/about-model');

function _putContent (req, res) {
    serviceMongoose().then(function(r) {
        company.findOneAndUpdate({_id : req.body._id}, req.body, {upsert : true}, function (err, company) {
            if(err) {
                throw err;
            }
            else {
                res.send(company);
            }
            r.disconnect();
        });
    })
    .catch(function(err){
        res.send('error');
    });
}

function _getAboutImages(req, res) {
    let response = [];
    serviceMongoose().then(function(r) {
        aboutImages.find({}, function (err, aboutImages) {
            if(err) {
                throw err;
            }
            else {
                aboutImages.forEach(function(aboutImage) {
                    let content = {};
                    content.aid = aboutImage.aid;
                    content.contentType = aboutImage.img.contentType;
                    content.image = aboutImage.img.data.toString('base64');
                    response.push(content);
                })
                res.send(response);
            }
            r.disconnect();
        });
    })
    .catch(function(err){
        res.send('error');
    });
}

function _getContent (req, res) {
    serviceMongoose().then(function(r) {
        company.find({}, function (err, company) {
            if(err) {
                throw err;
            }
            else {
                res.send(company);
            }
            r.disconnect();
        });
    })
    .catch(function(err){
        res.send('error');
    });
}

module.exports = {
    getContent : _getContent,
    putContent : _putContent,
    getAboutImages: _getAboutImages
}
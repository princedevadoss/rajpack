let serviceMongoose = require('../../services/main');
let company = require('../../services/main/model');
let machineryImages = require('../../services/main/about-model');
let aboutImages = require('../../services/main/about-model');

function _putContent (req, res) {
    serviceMongoose().then(function(r) {
        let bodyContent = req.body;
        let companyDetails = {
            _id : bodyContent._id,
            aboutus: bodyContent.aboutus,
            machinery : bodyContent.machinery,
            customers : bodyContent.customers
        };
        company.findOneAndUpdate({_id : bodyContent._id}, companyDetails, {upsert : true}, function (err, company) {
            if(err) {
                throw err;
            }
            else {
                if (bodyContent.machineryImages.length || bodyContent.deleteMachinery.length) {
                    var promises = [];
                    bodyContent.machineryImages = bodyContent.machineryImages.concat(bodyContent.deleteMachinery);
                    bodyContent.machineryImages.forEach((image) => {
                        if (image.status === 'delete') {
                            promises.push(machineryImages.find({aid: image.id}).remove());
                        }
                        else if (image.status === 'new') {
                            let newmachine = new machineryImages({
                                aid: image.id,
                                img: {
                                    contentType: 'image/jpg',
                                    data: new Buffer(image.image,"base64")
                                }
                            });
                            promises.push(newmachine.save());
                        }
                        else {
                            promises.push(machineryImages.update({aid : image.id}, {img: {contentType: 'image/jpg', data:new Buffer(image.image,"base64")}}, {multi: true}));
                        }
                    });
                    Promise.all(promises).then((result) => {
                        res.send({message: 'success'});
                        r.disconnect();
                    });
                }
                else {
                    res.send({message: 'success'});
                    r.disconnect();
                }
            }
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
let serviceMongoose = require('../../services/main');
let enquiry = require('../../services/main/enquiry');

function _addEnquiry (req, res) {
    let m = serviceMongoose('mongodb+srv://prince:Sasikala2122@cluster0-8f79j.mongodb.net/rajpack?retryWrites=true&w=majority');
    console.log(req.body);
    m.then(function(r) {
        let enquiryInsert = new enquiry(req.body);
        enquiryInsert.save(req.body, function(err, enquiry) {
            if(err)
                throw err;
            res.send({status: 'success'});
            r.disconnect();
        });
    })
    .catch(function(err){
        res.send('error');
    });
}

module.exports = {
    addEnquiry : _addEnquiry
}
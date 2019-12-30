let serviceMongoose = require('../../services/main');
let feedback = require('../../services/main/feedback');

function _addFeedback (req, res) {
    let m = serviceMongoose('mongodb+srv://prince:Sasikala2122@cluster0-8f79j.mongodb.net/rajpack?retryWrites=true&w=majority');
    console.log(req.body);
    m.then(function(r) {
        let feedbackInsert = new feedback(req.body);
        feedbackInsert.save(req.body, function(err, feedback) {
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
    addFeedback : _addFeedback
}
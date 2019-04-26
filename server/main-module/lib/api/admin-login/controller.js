let serviceMongoose = require('../../services/main');
let admin = require('../../services/admin/model');

function _checkauth (req, res) {
    let m = serviceMongoose();
    console.log(req.body);
    m.then(function(r) {
        admin.find({username: req.body.username, password: req.body.password}, function (err, admin) {
            if (err) {
                throw err;
            }
            else {
                admin.length > 0 ? res.send({username: admin[0].username}) : res.send({error: 'credentials Incorrect'});
            }
            r.disconnect();
        });
    })
    .catch(function(err){
        res.send('error');
    });
}

module.exports = {
    checkauth : _checkauth
}
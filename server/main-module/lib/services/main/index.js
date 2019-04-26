let mongoose = require('mongoose');

function checkconnect () {

const options = {
    useNewUrlParser: true,
    keepAlive: true, 
    connectTimeoutMS: 30000,
    reconnectTries: Number.MAX_VALUE
};

return mongoose.connect('mongodb://prince:Sasikala2122@cluster0-shard-00-00-zc7tz.mongodb.net:27017,cluster0-shard-00-01-zc7tz.mongodb.net:27017,cluster0-shard-00-02-zc7tz.mongodb.net:27017/rajpack?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true');
}
module.exports = checkconnect;
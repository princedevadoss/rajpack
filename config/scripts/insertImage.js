var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    aid: Number,
    img: { data: Buffer, contentType: String }
});

var A = mongoose.model('about_images', schema);

mongoose.connect('mongodb://prince:Sasikala2122@cluster0-shard-00-00-zc7tz.mongodb.net:27017,cluster0-shard-00-01-zc7tz.mongodb.net:27017,cluster0-shard-00-02-zc7tz.mongodb.net:27017/rajpack?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true').then(function () {
  console.error('mongo is open');

    var a = new A;
    a.img.data = fs.readFileSync(process.argv[2]);
    a.img.contentType = process.argv[3];
    a.aid = process.argv[4];
    a.save(function (err, a) {
      if (err) throw err;

      console.error('saved img to mongo');
      process.exit(1);
    })
})
.catch(function(err){
    console.log(err)
});
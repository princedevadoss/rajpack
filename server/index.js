
const express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let main = require('./main-module/lib/api');
let port = process.env.PORT || 8081;
const app = express();

app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../public-new')));
app.use('/old', express.static(path.join(__dirname, '../public')));
app.use('/app', main);
app.get('/*', function(req, res) {
    res.sendfile('../public-new/index.html')
});
app.get('/old/*', function(req, res) {
  res.sendfile('../public/index.html')
});
app.get('/boxapp', function(req, res) {
  res.sendfile('./public/boxapp/index.html')
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));


'use strict';

var express = require('express');
var app = express();
var cors = require('cors');
var path = require('path');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../index.html'));
});

app.set('port', process.env.PORT || 3000);

module.exports = app.listen(app.get('port'), '0.0.0.0', function() {
    console.log("DEV-Server listening " + app.get('port'));
});
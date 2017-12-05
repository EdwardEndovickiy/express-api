var express = require('express');
var bodyParser = require('body-parser');
var Items = require('./routes/items.route.js');

var app = express();

app.use('/api/public', Items);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function() {
  console.log('App listening on port 3000');
});

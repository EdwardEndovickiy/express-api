var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var items = [
  {
    id: 1,
    name: 'Item1'
  }, {
    id: 2,
    name: 'Item2'
  }, {
    id: 3,
    name: 'Item3'
  }
]

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/items', function (req, res) {
  res.send(items);
});

app.get('/item/:id', function (req, res) {
  var item = items.find(function (items) {
    return items.id === +req.params.id;
  });
  res.send(item);
});

app.post('/item', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

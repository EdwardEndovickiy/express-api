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
//get home
app.get('/', function (req, res) {
  res.send('App API');
});
//get all items
app.get('/items', function (req, res) {
  res.send(items);
});
//get item by id
app.get('/item/:id', function (req, res) {
  var item = items.find(function (items) {
    return items.id === +req.params.id;
  });
  res.send(item);
});
//post new item
app.post('/item', function (req, res) {
  var item = {
    id: Date.now(),
    name: req.body.name
  };
  items.push(item);
  res.send(item);
});
//put change item by id
app.put('/item/:id', function (req, res) {
  var item = items.find(function (items) {
    return items.id === +req.params.id;
  });
  item.name = req.body.name;
  res.sendStatus(200);
});
//delete item by id
app.delete('/item/:id', function (req, res) {
  items = items.filter(function(item) {
    return item.id !== +req.body.id;
  });
  res.sendStatus(200);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

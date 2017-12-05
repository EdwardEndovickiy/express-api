var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectId;

var db = require('../middlewares/db');

db.connect('mongodb://localhost:27017/api', function(err) {
  if (err) {
    return console.log(err);
  }
});

//get home
router.get('/', function(req, res) {
  res.send('App API');
});

//get all items
router.get('/items', function(req, res) {
  db.get().collection('items').find().toArray(function(err, items) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(items);
  });
});

//get item by id
router.get('/item/:id', function(req, res) {
  db.get().collection('items').findOne({_id: ObjectId(req.params.id)}, function(err, item) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(item);
  })
});

//post new item
router.post('/item', function(req, res) {
  var item = {
    name: req.body.name
  };

  db.get().collection('items').insert(item, function(err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(item);
  });
});

//put change item by id
router.put('/item/:id', function(req, res) {
  db.get().collection('items').updateOne(
    { _id: ObjectId(req.params.id) },
    { name: req.body.name },
    function(err, result) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.sendStatus(200);
    }
  )
});

//delete item by id
router.delete('/item/:id', function(req, res) {
  db.get().collection('items').deleteOne(
    {_id: ObjectId(req.params.id)},
    function(err, result) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.sendStatus(200);
    }
  )
});

module.exports = router;

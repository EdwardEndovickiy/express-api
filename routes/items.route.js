var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectId;
var itemsController = require('../controllers/items.controller');

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
router.get('/items', itemsController.all);

//get item by id
router.get('/item/:id', itemsController.findById);

//post new item
router.post('/item', itemsController.create);

//put change item by id
router.put('/item/:id', itemsController.update);

//delete item by id
router.delete('/item/:id', itemsController.delete);

module.exports = router;

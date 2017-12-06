var db = require('../middlewares/db');
var ObjectId = require('mongodb').ObjectId;

exports.all = function (callback) {
  db.get().collection('items').find().toArray(function (err, items) {
     callback(err, items);
  });
};

exports.findById = function (id, callback) {
  db.get().collection('items').findOne({_id: ObjectId(id)}, function (err, item) {
    callback(err, item);
  });
};

exports.create = function (item, callback) {
  db.get().collection('items').insert(item, function (err, result) {
    callback(err, result);
  });
};

exports.update = function (id, newData, callback) {
  db.get().collection('items').updateOne(
    {_id: ObjectId(id)},
    newData,
    function (err, result) {
      callback(err, result);
    });
}

exports.delete = function (id, callback) {
  db.get().collection('items').deleteOne(
    {_id: ObjectId(id)},
    function (err, result) {
      callback(err, result);
    }
  );
};

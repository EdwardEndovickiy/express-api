var Items = require('../models/items.model');

exports.all = function (req, res) {
  Items.all(function (err, items) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(items);
  });
};

exports.findById = function (req, res) {
  Items.findById(req.params.id, function (err, item) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(item);
  });
};

exports.create = function (req, res) {
  var item = {
    name: req.body.name
  }

  Items.create(item, function (err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};

exports.update = function (req, res) {
  var item = {
    name: req.body.name
  }

  Items.update(req.params.id, item, function (err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  })
}

exports.delete = function (req, res) {
  Items.delete(req.params.id, function (err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
}

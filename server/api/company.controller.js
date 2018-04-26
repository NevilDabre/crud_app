var express = require('express');
var router = express.Router();
var Company = require('../models/company');

function index(req, res) {
  return Company.find()
    .then(function (entity) {
      res.send(entity)
    })
    .catch(function (err) {
      console.log(err)
    })
}

function show(req, res) {
  return Company.findById(req.param._id)
    .then(function (entity) {
      res.send(entity);
    })
    .catch(function (err) {
      console.log(err);
    })
}

function create(req, res) {
  var newCompany = Company({
    name : req.body.name,
    address: req.body.address
  })  

  return newCompany.save()
    .then(function(entity){
      res.send(entity);
    })
    .catch(function(err){
      console.log(err);
    })
}

function update(req, res){
  var _id = req.param._id;

  var entry = {
    name : req.body.name,
    address: req.body.address
  }

  return Company.findByIdAndUpdate(_id, entry)
    .then(function(entity){
      res.send(entity);
    })
    .catch(function(err){
      console.log(err);
    })
}

function destroy(req, res){
  var _id = req.param._id;

  return Company.findByIdAndRemove(_id)
    .then(function(entity){
      res.send(entity);
    })
    .catch(function(err){
      console.log(err);
    })
}

router.get('/', index);
router.get('/:id', show);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', destroy);


module.exports = router;
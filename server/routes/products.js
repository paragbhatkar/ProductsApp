const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const product = require('../models/product');
const dbconfig = require('../config/dbconfig');

route.get('/', function(req,res){
    console.log('get 1');
    product.find({},function(err, products){
        if(err) throw err;
        res.json(products);
    });
    //res.send('Get all products.');
}).get('/:id', function(req,res){
    product.find({ _id : req.params['id']},function(err, products){
        if(err) throw err;
        res.json(products);
    });
    //res.send('Get single product.'+ req.params['id']);
}).post('/',function(req,res){
    res.send('Post insert product.'+ req.params['id']);
}).put('/:id', function(req,res){
    console.log('put');
    console.log(req.body);
    product.findByIdAndUpdate(req.params.id, req.body, function (err, product) {
        if (err) return next(err);
        res.send('Record updated.');
      });
}).delete('/:id',function(req,res){
    product.remove({_id: req.params.id},function(err,product){
        if(err) res.send(err);
        res.send('Deleted successfully - ' + product);
    });
});

module.exports = route;
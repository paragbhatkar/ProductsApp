const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    type: String,
    manufacturer: String,
    cost: Number,
    price: Number
});

const product = mongoose.model('product',productSchema);

module.exports = product;
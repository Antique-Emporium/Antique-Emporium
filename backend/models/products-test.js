const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    productName: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    stock: {
        type: Number,
        required: true,
    },
    image: {
        type: Array,
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true })

const Products = mongoose.model('Product', Product);

module.exports = Products;
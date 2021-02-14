const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById, getAll } = require('../controller/productControllers');
const Product = require('../models/product');

router.get('/products', getAllProducts);
router.get('/:id', getProductById);

module.exports = router;
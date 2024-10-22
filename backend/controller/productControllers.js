const Product = require('../models/product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (err) {
        console.error(error);
        res.status(500).json({message: 'Internal Error.'});
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (err) {
        console.error(error);
        res.status(500).json({message: 'Internal Error.'});
    }
}

module.exports = {
    getAllProducts,
    getProductById,
}
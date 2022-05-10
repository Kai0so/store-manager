const Product = require('../models/productModel');

const getAll = async () => {
    const products = await Product.getAll();
  
    return products;
  };

 const getById = async (id) => {
    const [products] = await Product.getById(id);

    return products;
 };

module.exports = {
    getAll,
    getById,
};

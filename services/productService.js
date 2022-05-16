const Product = require('../models/productModel');

const getAll = async () => {
    const products = await Product.getAll();
  
    return products;
  };

 const getById = async (id) => {
    const [products] = await Product.getById(id);

    return products;
 };

 const create = async (name, quantity) => {
    const newProduct = await Product.create(name, quantity);

    return newProduct;
 };

module.exports = {
    getAll,
    getById,
    create,
};

const Product = require('../services/productService');
const { httpStatus } = require('../middlewares/helpers/httpStatusCode');

const getAll = async (_req, res, next) => {
  try {
    const products = await Product.getAll();

    res.status(httpStatus('ok')).json(products);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const products = await Product.getById(id);
    res.status(httpStatus('ok')).json(products);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;
    const newProduct = await Product.create(name, quantity);
  
    res.status(httpStatus('created')).json(newProduct);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;

    const updatedProduct = await Product.update(id, name, quantity);

    res.status(httpStatus('ok')).json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.deleteProduct(id);

    res.status(httpStatus('noContent')).json(deletedProduct);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteProduct,
};

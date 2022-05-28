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

const getById = async (req, res) => {
    const { id } = req.params;
    const products = await Product.getById(id);
    res.status(httpStatus('ok')).json(products);
  };

const create = async (req, res) => {
  const { name, quantity } = req.body;
  const newProduct = await Product.create(name, quantity);

  res.status(httpStatus('created')).json(newProduct);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;

  const updatedProduct = await Product.update(id, name, quantity);

  res.status(httpStatus('ok')).json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const deletedProduct = await Product.deleteProduct(id);

  res.status(httpStatus('noContent')).json(deletedProduct);
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteProduct,
};

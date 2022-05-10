const Product = require('../services/productService');
const { httpStatus } = require('../middlewares/helpers/httpStatusCode');

const getAll = async (_req, res) => {
  const products = await Product.getAll();

  res.status(httpStatus('ok')).json(products);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const products = await Product.getById(id);
    res.status(httpStatus('ok')).json(products);
  };

module.exports = {
    getAll,
    getById,
};

const Sale = require('../services/saleService');
const { httpStatus } = require('../middlewares/helpers/httpStatusCode');
const { errorMessage } = require('../middlewares/helpers/errorMessages');

const getAll = async (_req, res) => {
  const sales = await Sale.getAll();
  res.status(httpStatus('ok')).json(sales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const sales = await Sale.getById(id);
  if (!sales) return res.status(httpStatus('notFound')).json(errorMessage('notFoundSale'));
  res.status(httpStatus('ok')).json(sales);
};

const create = async (req, res) => {
  const sales = req.body;
  const newSale = await Sale.create(sales);
  res.status(httpStatus('created')).json(newSale);
};

const update = async (req, res) => {
  const { id } = req.params;
  const sales = req.body;
  const updatedSale = await Sale.update(id, sales);
  res.status(httpStatus('ok')).json(updatedSale);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const deletedSale = await Sale.deleteSale(id);
  res.status(httpStatus('noContent')).json(deletedSale);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteSale,
};
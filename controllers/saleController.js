const Sale = require('../services/saleService');
const { httpStatus } = require('../middlewares/helpers/httpStatusCode');

const getAll = async (_req, res) => {
  const sales = await Sale.getAll();

  res.status(httpStatus('ok')).json(sales);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const sales = await Sale.getById(id);
    res.status(httpStatus('ok')).json(sales);
  };

module.exports = {
    getAll,
    getById,
};

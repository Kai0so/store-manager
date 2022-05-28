const Sale = require('../services/saleService');
const { httpStatus } = require('../middlewares/helpers/httpStatusCode');

const getAll = async (_req, res, next) => {
  try {
    const sales = await Sale.getAll();
  
    res.status(httpStatus('ok')).json(sales);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sales = await Sale.getById(id);
    res.status(httpStatus('ok')).json(sales);
  } catch (error) {
    next(error);
  }
  };

  const create = async (req, res, next) => {
    try {
      const sales = req.body;
      const newSale = await Sale.create(sales);
  
      res.status(httpStatus('created')).json(newSale);
    } catch (error) {
      next(error);
    }
  };

  const update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const sales = req.body;
    
      const updatedSale = await Sale.update(id, sales);
    
      res.status(httpStatus('ok')).json(updatedSale);
    } catch (error) {
      next(error);
    }
  };

  const deleteSale = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const deletedSale = await Sale.deleteSale(id);
  
      res.status(httpStatus('noContent')).json(deletedSale);
    } catch (error) {
      next(error);
    }
  };

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteSale,
};

const Sale = require('../models/saleModel');

const getAll = async () => {
    const sales = await Sale.getAll();
  
    return sales;
  };

const getById = async (id) => {
    const sales = await Sale.getById(id);

    if (sales === null) return null;

    return sales;
 };

module.exports = {
    getAll,
    getById,
};

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

 const create = async (sales) => {
  const newSale = await Sale.create(sales);

  return newSale;
};

module.exports = {
    getAll,
    getById,
    create,
};

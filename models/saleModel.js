const connection = require('./connection');
const { serialize } = require('../middlewares/helpers/serializeData');

const getAll = async () => {
  const query = `SELECT DISTINCT sale_id, date, product_id, quantity
  FROM sales
  JOIN sales_products
  ORDER BY sale_id, product_id ASC`;
  const [sales] = await connection.execute(query);
  
  return serialize(sales);
};

const getById = async (id) => {
  const query = `SELECT sa.date, sp.product_id, sp.quantity
  FROM StoreManager.sales_products as sp
  JOIN StoreManager.sales as sa
  ON sa.id = sp.sale_id
  WHERE sp.sale_id = ?
  ORDER BY sale_id, product_id ASC;`;
  const [sales] = await connection.execute(query, [id]);

  if (sales.length === 0) return null;

  return serialize(sales);
};

module.exports = {
  getAll,
  getById,
};

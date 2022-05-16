const connection = require('./connection');

const getAll = async () => {
  const query = `SELECT *
      FROM StoreManager.products
      ORDER BY id ASC;`;
  const [products] = await connection.execute(query);
  
  return products;
};

const getById = async (id) => {
  const query = `SELECT *
      FROM StoreManager.products
      WHERE id = ?;`;
  const [products] = await connection.execute(query, [id]);

  return products;
};

const create = async (name, quantity) => {
  const query = `INSERT INTO StoreManager.products (name, quantity)
  VALUES
  (?, ?);`;
  const [newProduct] = await connection.execute(query, [name, quantity]);
  
  return newProduct;
};

module.exports = {
  getAll,
  getById,
  create,
};

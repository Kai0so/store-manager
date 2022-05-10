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

module.exports = {
  getAll,
  getById,
};

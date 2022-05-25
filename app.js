const express = require('express');
const Product = require('./controllers/productController');
const Sale = require('./controllers/saleController');
const { getProductValidation,
  createProductValidation,
  updateProductValidation } = require('./middlewares/productsValidation');
const { getSaleValidation,
  createSaleValidation } = require('./middlewares/salesValidation');

const app = express();
app.use(express.json());

// GET ENDPOINTS
app.get('/products', Product.getAll);
app.get('/products/:id', getProductValidation, Product.getById);
app.get('/sales', Sale.getAll);
app.get('/sales/:id', getSaleValidation, Sale.getById);

// POST ENDPOINTS
app.post('/products', createProductValidation, Product.create);
app.post('/sales', createSaleValidation, Sale.create);

// PUT ENDPOINTS
app.put('/products/:id', updateProductValidation, Product.update);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;

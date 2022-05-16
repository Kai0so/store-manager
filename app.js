const express = require('express');
const Product = require('./controllers/productController');
const Sale = require('./controllers/saleController');
const { getProductValidation,
  createProductValidation } = require('./middlewares/productsValidation');
const { getSaleValidation } = require('./middlewares/salesValidation');

const app = express();
app.use(express.json());

app.get('/products', Product.getAll);
app.get('/products/:id', getProductValidation, Product.getById);
app.get('/sales', Sale.getAll);
app.get('/sales/:id', getSaleValidation, Sale.getById);
app.post('/products', createProductValidation, Product.create);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;

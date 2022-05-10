const Product = require('../services/productService');
const { errorMessage } = require('./helpers/errorMessages');
const { httpStatus } = require('./helpers/httpStatusCode');

const getProductValidation = async (req, res, next) => {
    const { id } = req.params;
    const result = await Product.getById(id);
    if (!result) return res.status(httpStatus('notFound')).json(errorMessage('notFoundProduct'));

    next();
};

module.exports = {
    getProductValidation,
};

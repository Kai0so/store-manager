const Sale = require('../services/saleService');
const { errorMessage } = require('./helpers/errorMessages');
const { httpStatus } = require('./helpers/httpStatusCode');

const getSaleValidation = async (req, res, next) => {
    const { id } = req.params;
    const result = await Sale.getById(id);
    if (result === null) {
        return res.status(httpStatus('notFound')).json(errorMessage('notFoundSale'));
    }

    next();
};

module.exports = {
    getSaleValidation,
};

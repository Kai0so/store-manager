const { expect } = require('chai');
const sinon = require('sinon');
const productController = require('../../../controllers/productController');
const pŕoductService = require('../../../services/productService');

describe('productController', () => {
  describe('Quando é invocada a função getAll', () => {
    const request = {};
    const response = {};
    const getAllResult = [];

    before(() => {
      sinon.stub(pŕoductService, 'getAll').returns(getAllResult);
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
    });

    after(() => {
      pŕoductService.getAll.restore();
    });

    it('Retorna status 200', async () => {
      await productController.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
    it('Retorna um JSON com todos os produtos', async () => {
      await productController.getAll(request, response);
      expect(response.json.calledWith(getAllResult)).to.be.equal(true);
    });
  });
});
const { expect } = require('chai');
const sinon = require('sinon');
const saleController = require('../../../controllers/saleController');
const saleService = require('../../../services/saleService');

describe('saleController', () => {
  describe('Quando é invocada a função getAll', () => {
    const request = {};
    const response = {};
    const getAllResult = [];

    before(() => {
      sinon.stub(saleService, 'getAll').returns(getAllResult);
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
    });

    after(() => {
      saleService.getAll.restore();
    });

    it('Retorna status 200', async () => {
      await saleController.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
    it('Retorna um JSON com todas as vendas', async () => {
      await saleController.getAll(request, response);
      expect(response.json.calledWith(getAllResult)).to.be.equal(true);
    });
  });
});
const { expect } = require('chai');
const sinon = require('sinon');
const productModel = require('../../../models/productModel');
const connection = require('../../../models/connection');
const { getAllResult } = require('../mocks/products');

describe('productModel', () => {
  describe('Quando é invocada a função getAll', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves(getAllResult);
    });

    after(() => {
      connection.execute.restore();
    });

    it('retorna um array', async () => {
      const result = await productModel.getAll();
      expect(result).to.be.an('array');
    });
    it('o array não está vazio', async () => {
      const result = await productModel.getAll();
      expect(result).to.be.not.empty;
    });
  });
});
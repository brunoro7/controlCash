import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import api from '../../../api';

import transactionServices from '../../../services/transaction.services';
import transactionController from '../../../controllers/transaction.controller';
import arrayTransactionsMock from '../../mocks/transaction/arrayTransactionsMock';

chai.use(chaiHttp);

describe('Tests for transaction.controller', () => {
  beforeEach(() => sinon.restore());

  describe('1- transaction.controller/readAllTransactions', () => {

    it(`1.1- Testing, if transactionServices.readAllTransactions fail,
    transactionController throw error`, async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const req: any = {
        params: {},
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res: any = {
        status: sinon.stub().callsFake(() => res),
        json: sinon.stub().returns({}),
      };

      sinon.stub(transactionServices, 'readAllTransactions').resolves(undefined);
      const response = await transactionController.readAllTransactions(req, res);

      chai.expect(response).to.be.throw;
    });

    it(`1.2- Testing, if transactionController.readAllTransactions ok,
    return array with transactions and status 200`, async () => {

      sinon.stub(transactionServices, 'readAllTransactions').resolves(arrayTransactionsMock);
      const response = await chai.request(api).get('/transaction').send();

      chai.expect(response.body).to.be.deep.equal(arrayTransactionsMock);
      chai.expect(response.status).to.be.equal(200);
    });
  });

});

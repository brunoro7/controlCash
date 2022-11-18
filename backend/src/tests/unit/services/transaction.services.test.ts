import sinon from 'sinon';
import chai from 'chai';

import Transaction from '../../../database/models/Transaction';
import transactionServices from '../../../services/transaction.services';
import arrayTransactionsMock from '../../mocks/transaction/arrayTransactionsMock';

describe('Tests for transaction.services', () => {
  beforeEach(() => sinon.restore());

  describe('1- transaction.services/readAllTransactions', () => {

    it('1.1- Testing, if Transaction.findAll fail, transactionServices throw error;', () => {
      sinon.stub(Transaction, 'findAll').rejects;

      chai.expect(transactionServices.readAllTransactions()).to.be.throw;
    });

    it(`1.2- Testing, if transactionServices.readAllTransactions ok,
    return array with transactions`, async () => {

      sinon.stub(Transaction, 'findAll').resolves(arrayTransactionsMock as Transaction[]);

      chai.expect(await transactionServices.readAllTransactions())
        .to.be.equal(arrayTransactionsMock);
    });
  });

});

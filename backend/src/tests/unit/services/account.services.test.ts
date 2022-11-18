import sinon from 'sinon';
import chai from 'chai';

import Account from '../../../database/models/Account';
import accountServices from '../../../services/account.services';
import arrayAccountsMock from '../../mocks/account/arrayAccountsMock';

describe('Tests for account.services', () => {
  beforeEach(() => sinon.restore());

  describe('1- account.services/readAllAccounts', () => {

    it('1.1- Testing, if Account.findAll fail, accountServices throw error;', () => {
      sinon.stub(Account, 'findAll').rejects;

      chai.expect(accountServices.readAllAccounts()).to.be.throw;
    });

    it(`1.2- Testing, if accountServices.readAllAccounts ok,
    return array with accounts;`, async () => {
      sinon.stub(Account, 'findAll').resolves(arrayAccountsMock as Account[]);

      chai.expect(await accountServices.readAllAccounts()).to.be.equal(arrayAccountsMock);
    });
  });

});

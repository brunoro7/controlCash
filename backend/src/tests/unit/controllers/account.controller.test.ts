import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import api from '../../../api';
import accountServices from '../../../services/account.services';
import accountController from '../../../controllers/account.controller';
import arrayAccountsMock from '../../mocks/account/arrayAccountsMock';
import accountMock from '../../mocks/account/accountMock';

chai.use(chaiHttp);

describe('Tests for account.controller', () => {
  beforeEach(() => sinon.restore());

  describe('1- account.controller/readAllAccounts', () => {

    it(`1.1- Testing, if accountServices.readAllAccounts fail,
    accountController throw error;`, async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const req: any = {
        params: {},
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res: any = {
        status: sinon.stub().callsFake(() => res),
        json: sinon.stub().returns({}),
      };

      sinon.stub(accountServices, 'readAllAccounts').resolves(undefined);
      const response = await accountController.readAllAccounts(req, res);

      chai.expect(response).to.be.throw;

    });

    it(`1.2- Testing, if accounts.Controller.readAllAccounts ok,
    return array with accounts and status 200`, async () => {

      sinon.stub(accountServices, 'readAllAccounts').resolves(arrayAccountsMock);
      const response = await chai.request(api).get('/account').send();

      chai.expect(response.body).to.be.deep.equal(arrayAccountsMock);
      chai.expect(response.status).to.be.equal(200);
    });
  });

  describe('2- account.controller/createAccount', () => {

    it(`2.1- Testing, if accountServices.createNewAccount fail,
    accountController throw error;`, async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const req: any = {
        params: {},
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res: any = {
        status: sinon.stub().callsFake(() => res),
        json: sinon.stub().returns({}),
      };

      sinon.stub(accountServices, 'createNewAccount').resolves(undefined);
      const response = await accountController.readAllAccounts(req, res);

      chai.expect(response).to.be.throw;

    });

    it(`2.2- Testing, if accountsController.createNewAccount ok,
    return object with new account and status 201`, async () => {

      sinon.stub(accountServices, 'createNewAccount').resolves(accountMock);
      const response = await chai.request(api).post('/account').send();

      chai.expect(response.body).to.be.deep.equal(accountMock);
      chai.expect(response.status).to.be.equal(201);
    });
  });

  describe('3- account.controller/readAccountById', () => {

    it(`3.1- Testing, if accountServices.readAccountById fail,
    accountController throw error;`, async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const req: any = {
        params: { id: 1 },
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res: any = {
        status: sinon.stub().callsFake(() => res),
        json: sinon.stub().returns({}),
      };

      sinon.stub(accountServices, 'readAccountById').resolves(undefined);
      const response = await accountController.readAccountById(req, res);

      chai.expect(response).to.be.throw;

    });

    it(`3.2- Testing, if accounts.Controller.readAccountById ok,
    return object with account and status 200`, async () => {

      sinon.stub(accountServices, 'readAccountById').resolves(accountMock);
      const response = await chai.request(api).get(`/account/${accountMock.id}`).send();

      chai.expect(response.body).to.be.deep.equal(accountMock);
      chai.expect(response.status).to.be.equal(200);
    });
  });

});

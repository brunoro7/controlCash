import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import api from '../../../api';
import userServices from '../../../services/user.services';
import arrayUsersMock from '../../mocks/user/arrayUsersMock';
import userController from '../../../controllers/user.controller';
import userMock from '../../mocks/user/userMock';

chai.use(chaiHttp);

describe('Tests for user.controller', () => {
  beforeEach(() => sinon.restore());

  describe('1- user.controller/readAllUsers', () => {
    
    it('1.1- Testing, if userServices.readAllUsers fail, userController throw error;', async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const req: any = {
        params: {},
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res: any = {
        status: sinon.stub().callsFake(() => res),
        json: sinon.stub().returns({}),
      };

      sinon.stub(userServices, 'readAllUsers').resolves(undefined);
      const response = await userController.readAllUsers(req, res);

      chai.expect(response).to.be.throw;
    });

    it(`1.2- Testing, if userController.readAllUsers ok,
    return array with users and status 200;`, async () => {

      sinon.stub(userServices, 'readAllUsers').resolves(arrayUsersMock);
      const response = await chai.request(api).get('/user').send();

      chai.expect(response.body).to.be.deep.equal(arrayUsersMock);
      chai.expect(response.status).to.be.equal(200);
    });
  });

  describe('2- user.controller/createAccount', () => {

    it(`2.1- Testing, if accountServices.createNewAccount fail,
    accountController throw error;`, async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const req: any = {
        params: { id: userMock.id },
        body: { ...userMock },
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res: any = {
        status: sinon.stub().callsFake(() => res),
        json: sinon.stub().returns({}),
      };

      sinon.stub(userServices, 'createNewUser').resolves(undefined);
      sinon.stub(userServices, 'checkReqBodyUser').resolves(undefined);
      const response = await userController.createNewUser(req, res);

      chai.expect(response).to.be.throw;

    });

    it(`2.2- Testing, if userController.createNewUser ok,
    return object with new user and status 201`, async () => {

      sinon.stub(userServices, 'createNewUser').resolves(userMock);
      sinon.stub(userServices, 'checkReqBodyUser').resolves();

      const response = await chai.request(api).post('/user').send();

      chai.expect(response.body).to.be.deep.equal(userMock);
      chai.expect(response.status).to.be.equal(201);
    });
  });

  describe('3- user.controller/readUserById', () => {

    it(`3.1- Testing, if userServices.readUserById fail,
    userController throw error;`, async () => {
      sinon.stub(userServices, 'readUserById').rejects;
      const response = await chai.request(api).get(`/user/${userMock.id}`).send();

      chai.expect(response).to.be.throw;

    });

    it(`3.2- Testing, if userController.readUserById ok,
    return object with user and status 200`, async () => {

      const userTocliente = {
        id: userMock.id,
        username: userMock.username,
        accountId: userMock.accountId,
        balance: '100.00',
      };

      sinon.stub(userServices, 'readUserById').resolves(userMock);
      const response = await chai.request(api).get(`/user/${userMock.id}`).send();

      chai.expect(response.body).to.be.deep.equal(userTocliente);
      chai.expect(response.status).to.be.equal(200);
    });
  });

});

import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import api from '../../../api';
import userMock from '../../mocks/user/userMock';
import loginController from '../../../controllers/login.controller';
import loginServices from '../../../services/login.services';
import jwtService from '../../../helpers/jwt.services';
import mockUserToJwt from '../../mocks/login/mockUserToJwt';
import userServices from '../../../services/user.services';

chai.use(chaiHttp);

describe('Tests for login.controller', () => {
  beforeEach(() => sinon.restore());

  describe('1- login.controller/post', () => {

    it(`1.1- Testing, if loginController.post fail, loginController throw
    error`, async () => {
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

      sinon.stub(loginController, 'post').rejects;
      const response = await loginController.post(req, res);

      chai.expect(response).to.be.throw;

    });

    it(`1.2- Testing, if loginController.post ok,
    return object new user with token, and status 201`, async () => {

      sinon.stub(loginServices, 'checkPassword').resolves(true);
      sinon.stub(userServices, 'readUserByUsername').resolves({...userMock});
      sinon.stub(jwtService, 'createToken').resolves({...mockUserToJwt});

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const req: any = {
        params: { id: mockUserToJwt.userNoPass.id },
        body: { username: mockUserToJwt.userNoPass.username, password: '8iNateoito' },
      };
      const response = await chai.request(api).post('/login').send(req);

      const responseJson = {
        ...mockUserToJwt.userNoPass,
        token: mockUserToJwt.token,
      };

      chai.expect(response.body).to.be.deep.equal({...responseJson});
      chai.expect(response.status).to.be.equal(201);
    });
  });

});

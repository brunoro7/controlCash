import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import api from '../../../api';
import userServices from '../../../services/user.services';
import arrayUsersMock from '../../mocks/user/arrayUsersMock';
import userController from '../../../controllers/user.controller';

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

});

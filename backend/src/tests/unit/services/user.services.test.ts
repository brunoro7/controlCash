import sinon from 'sinon';
import chai from 'chai';

import User from '../../../database/models/User';
import userServices from '../../../services/user.services';
import arrayUsersMock from '../../mocks/user/arrayUsersMock';

describe('Tests for user.services', () => {
  beforeEach(() => sinon.restore());

  describe('1- user.services/readAllUsers', () => {

    it('1.1- Testing, if User.findAll fail, userServices throw error;', () => {
      sinon.stub(User, 'findAll').rejects;

      chai.expect(userServices.readAllUsers()).to.be.throw;
    });

    it('1.2- Testing, if userServices.readAllUsers ok, return array with users;', async () => {
      sinon.stub(User, 'findAll').resolves(arrayUsersMock as User[]);

      chai.expect(await userServices.readAllUsers()).to.be.equal(arrayUsersMock);
    });
  });

});

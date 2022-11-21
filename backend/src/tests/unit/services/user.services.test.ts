import sinon from 'sinon';
import chai from 'chai';

import User from '../../../database/models/User';
import userServices from '../../../services/user.services';
import arrayUsersMock from '../../mocks/user/arrayUsersMock';
import userMock from '../../mocks/user/userMock';
import reqBodyUserMock from '../../mocks/user/reqBodyuserMock';

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

  describe('2- user.services/createNewUser', () => {

    it('2.1- Testing, if User.create fail, userServices throw error;', () => {
      sinon.stub(User, 'create').rejects;

      chai.expect(userServices.createNewUser(reqBodyUserMock)).to.be.throw;
    });

    it(`2.2- Testing, if userServices.createNewUser or in this case if the new User ok,
    return new user;`, async () => {
      const response = new User({ ...userMock });

      chai.expect(response.dataValues).to.be.deep.equal(userMock);
    });
  });

  describe('3- user.services/readUserById', () => {

    it('3.1- Testing, if User.findOne fail, userServices throw error;', () => {
      sinon.stub(User, 'findOne').rejects;

      chai.expect(userServices.readUserById(0)).to.be.throw;
    });

    it(`3.2- Testing, if userServices.readUserById ok,
    return object with user;`, async () => {
      sinon.stub(User, 'findOne').resolves(userMock as User);
      

      chai.expect(await userServices.readUserById(1)).to.be.equal(userMock);
    });
  });

  describe('4- user.services/readUserByUsername', () => {

    it('4.1- Testing, if User.findOne fail, userServices throw error;', () => {
      sinon.stub(User, 'findOne').rejects;

      chai.expect(userServices.readUserById(0)).to.be.throw;
    });

    it(`4.2- Testing, if userServices.readUserByUsername ok,
    return object with user;`, async () => {
      sinon.stub(User, 'findOne').resolves(userMock as User);
      

      chai.expect(await userServices.readUserByUsername('BrunoRo7')).to.be.equal(userMock);
    });
  });

});

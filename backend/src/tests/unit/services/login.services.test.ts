import bcrypt from 'bcrypt';
import sinon from 'sinon';
import chai from 'chai';

import loginServices from '../../../services/login.services';

describe('Tests for login.services', () => {
  beforeEach(() => sinon.restore());

  describe('1- login.services/checkPassword', () => {

    it('1.1- Testing, if loginServices.checkPassword fail, userServices throw error;',
      async () => {
        sinon.stub(loginServices, 'checkPassword').rejects;
        sinon.stub(bcrypt, 'compare').rejects;
        const passwordFromBody = '8iNateoito';
        const passwordFromDb = '$2b$10$YuYNH4z3VRHkvY5Eluu.T.ZAfQW7nmvKMl/9oWso6QKhMHNhtD2FO';

        chai.expect(loginServices.checkPassword(passwordFromBody, passwordFromDb)).to.be.throw;
      });

    it(`1.2- Testing, if loginServices.checkPassword ok,
    return 'true';`, async () => {
      sinon.stub(bcrypt, 'compare').resolves(true);
      const passwordFromBody = '8iNateoito';
      const passwordFromDb = '$2b$10$YuYNH4z3VRHkvY5Eluu.T.ZAfQW7nmvKMl/9oWso6QKhMHNhtD2FO';

      chai.expect(await loginServices
        .checkPassword(passwordFromBody, passwordFromDb)).to.be.equal(true);
    });
  });

});

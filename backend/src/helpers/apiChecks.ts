import IdParamsNotValid from '../errors/IdParamsNotValid';
import InvalidLengthPassword from '../errors/InvalidLengthPassword';
import InvalidLengthUsername from '../errors/InvalidLengthUsername';
import InvalidPasswordType from '../errors/InvalidPasswordType';
import ReqBodyUserInterface from '../interfaces/ReqBodyUserInterface';
import userServices from '../services/user.services';

const apiChecks = {

  async checkIdError(accountId: string): Promise<number> {
    const regexChar = /^[A-Za-z]$/i.test(accountId);
    if(!accountId || regexChar === true ) {
      throw new IdParamsNotValid(
        `The 'id' is equals '${accountId}' in params and is not a valid 'id'.`
      );
    }
    return Number(accountId);
  },

  async checkUsernameLength(reqBody: ReqBodyUserInterface): Promise<ReqBodyUserInterface> {
    const { username } = reqBody;
    const minLength = 3;

    if(!username || username.length < minLength) {
      throw new InvalidLengthUsername(
        'The length of \'username\' must be at least 3 characters long.'
      );
    }
    return reqBody as ReqBodyUserInterface;
  },

  async checkUsernameUnique(reqBody: ReqBodyUserInterface): Promise<ReqBodyUserInterface> {
    const { username } = reqBody;
    await userServices.readUserByUsernameToRegister(username);

    return reqBody as ReqBodyUserInterface;
  },

  async checkPassword(reqBody: ReqBodyUserInterface): Promise<ReqBodyUserInterface> {
    const { password } = reqBody;
    const minLength = 8;
    if(!password || password.length < minLength) {
      throw new InvalidLengthPassword(
        'The length of \'password\' must be at least 8 characters long.'
      );
    }

    const regexCharLower = /[a-z]/.test(password);
    const regexCharUpper = /[A-Z]/.test(password);
    const regexNumber = /[0-9]/.test(password);
    const checkRegex = [regexCharLower, regexCharUpper, regexNumber];
    if(checkRegex.includes(false)) {
      throw new InvalidPasswordType(
        'The "password" must be at least 1 character lowercase, 1 character uppercase and 1 number.'
      );
    }

    return reqBody as ReqBodyUserInterface;
  },

};

export default apiChecks;

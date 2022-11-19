import IdParamsNotValid from '../errors/IdParamsNotValid';
import InvalidLengthPassword from '../errors/InvalidLengthPassword';
import InvalidLengthUsername from '../errors/InvalidLengthUsername';
// import InvalidPasswordType from '../errors/InvalidPasswordType';
import UserAlreadyExistsError from '../errors/UserAlreadyExistsError';
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
    const userAlreadyExists = await userServices.readUserByUsername(username);

    if(userAlreadyExists) {
      throw new UserAlreadyExistsError(
        'This \'username\' already exists.'
      );
    }
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
    // const regexChar = /[azZA]/.test(password);
    // if(regexChar === false) {
    //   throw new InvalidPasswordType(
    //     `The 'password' must be at least 1 character lowercase,
    //       1 character uppercase and 1 number.`
    //   );
    // }
    // const splitPassword = password.split('');
    // console.log(splitPassword);

    // const arrayPwdSplited = splitPassword.map((item) => Number(item));
    // console.log(arrayPwdSplited);

    // const hasNumber = arrayPwdSplited.some((elemento) => typeof elemento === 'number');
    // console.log(regexChar, hasNumber);

    // if(hasNumber === false) {
    //   throw new InvalidPasswordType(
    //     `The 'password' must be at least 1 character lowercase,
    //       1 character uppercase and 1 number.`
    //   );
    // }

    return reqBody as ReqBodyUserInterface;
  },

};

export default apiChecks;

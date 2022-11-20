import bcrypt from 'bcrypt';
import WhrongPasswordError from '../errors/WhrongPasswordError';

const loginServices = {

  async checkPassword(passwordFromBody: string, passwordFromDb: string) {
    const verifyPass = await bcrypt.compare(passwordFromBody, passwordFromDb);
    if (!verifyPass) {
      throw new WhrongPasswordError('The password was whrong.');
    }
    return verifyPass;
  },

};

export default loginServices;

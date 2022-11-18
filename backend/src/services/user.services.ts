import User from '../database/models/User';
import NotFoundError from '../errors/NotFoundError';
import UserInterface from '../interfaces/UserInterface';

const userServices = {
  async readAllUsers(): Promise<UserInterface[]> {
    const arrayUsers = await User.findAll();
    if(!arrayUsers) {
      throw new NotFoundError('Something whrong, try again in few seconds.');
    }
    return arrayUsers as UserInterface[];
  }
};

export default userServices;

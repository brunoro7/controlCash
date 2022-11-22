import bcrypt from 'bcrypt';
import User from '../database/models/User';
import NotFoundError from '../errors/NotFoundError';
import UserInterface from '../interfaces/UserInterface';
import DbFailCreate from '../errors/DbFailCreate';
import ReqBodyUserInterface from '../interfaces/ReqBodyUserInterface';
import apiChecks from '../helpers/apiChecks';
import ApiChecksFail from '../errors/ApiChecksFail';
import UserAlreadyExistsError from '../errors/UserAlreadyExistsError';

const messageDbError = 'Something was whrong, try again in few seconds.';

const userServices = {

  async checkReqBodyUser(reqUserBody: ReqBodyUserInterface) {
    const checkLength = await apiChecks.checkUsernameLength(reqUserBody);
    const checkUniq = await apiChecks.checkUsernameUnique(reqUserBody);
    const checkPass = await apiChecks.checkPassword(reqUserBody);

    if(
      checkLength !== reqUserBody
      || checkUniq !== reqUserBody
      || checkPass !== reqUserBody
    ) {
      throw new ApiChecksFail('Fail with unknow error in some test on apiChecks;');
    }

    return reqUserBody;
  },

  async readAllUsers(): Promise<UserInterface[]> {
    const arrayUsers = await User.findAll();
    if(!arrayUsers) {
      throw new NotFoundError(messageDbError);
    }
    return arrayUsers as UserInterface[];
  },

  async createNewUser(bodyNewUser: ReqBodyUserInterface): Promise<UserInterface> {
    const { password } = bodyNewUser;
    const hash = await bcrypt.hash(password, 10);
    const userCryptPass = {
      ...bodyNewUser,
      password: hash,
    };

    const { dataValues } = await User.create({...userCryptPass});
    const newUser = dataValues;

    if(!newUser) {
      throw new DbFailCreate(messageDbError);
    }
    return newUser as UserInterface;
  },

  async readUserById(userId: number): Promise<UserInterface> {
    const userById = await User.findOne(
      { where: { id: userId }, raw: true },
    );
    if(!userById) {
      throw new NotFoundError('User not find with this \'id\'.');
    }
    return userById as UserInterface;
  },

  async readUserByUsername(reqUsername: string): Promise<UserInterface> {
    const userByUsername = await User.findOne(
      { where: { username: reqUsername }, raw: true },
    );
    if(!userByUsername) {
      throw new NotFoundError('User not find with this \'id\'.');
    }
    return userByUsername as UserInterface;
  },

  async readUserByUsernameToRegister(reqUsername: string): Promise<boolean | void> {
    
    const response = await User.findOne(
      { where: { username: reqUsername }, raw: true },
    );
    if(response !== null) {
      throw new UserAlreadyExistsError('User alredy exists with this \'username\'.');
    }
    return true;
  },

};

export default userServices;

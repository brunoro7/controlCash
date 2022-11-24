import { Request, Response } from 'express';
import apiChecks from '../helpers/apiChecks';
import UserInterface from '../interfaces/UserInterface';
import accountServices from '../services/account.services';
import userServices from '../services/user.services';

const userController = {

  async readAllUsers(_req: Request, res: Response) {
    const arrayUsers: UserInterface[] = await userServices.readAllUsers();
    res.status(200).json(arrayUsers);
  },

  async createNewUser(req: Request, res: Response) {
    const bodyParams = await userServices.checkReqBodyUser(req.body);
    const newAccount = await accountServices.createNewAccount();
    const bodyCheckedWithAccount = {
      ...bodyParams,
      accountId: newAccount.id,
    };
    const newUser: UserInterface = await userServices.createNewUser(bodyCheckedWithAccount);
    res.status(201).json(newUser);
  },

  async readUserById(req: Request, res: Response) {
    const userId = await apiChecks.checkIdError(req.params.id);
    const userById: UserInterface = await userServices.readUserById(userId);
    const { password, ...userWhitoutPass } = userById;
    const accountById = await accountServices.readAccountById(userById.accountId);
    const userToClient = {
      ...userWhitoutPass,
      balance: accountById.balance,
    };
    res.status(200).json(userToClient);
  }
};

export default userController;

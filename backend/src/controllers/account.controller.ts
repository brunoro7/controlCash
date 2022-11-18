import { Request, Response } from 'express';
import AccountInterface from '../interfaces/AccountInterface';
import accountServices from '../services/account.services';

const accountController = {

  async createNewAccount(_req: Request, res: Response) {
    const newAccount: AccountInterface = await accountServices.createNewAccount();
    res.status(201).json(newAccount);
  },

  async readAllAccounts(_req: Request, res: Response) {
    const arrayAccounts: AccountInterface[] = await accountServices.readAllAccounts();
    res.status(200).json(arrayAccounts);
  }


};

export default accountController;

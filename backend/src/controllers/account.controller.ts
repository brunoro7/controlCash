import { Request, Response } from 'express';
import AccountInterface from '../interfaces/AccountInterface';
import accountServices from '../services/account.services';

const accountController = {
  async readAllAccounts(_req: Request, res: Response) {
    const arrayAccounts: AccountInterface[] = await accountServices.readAllAccounts();
    res.status(200).json(arrayAccounts);
  }
};

export default accountController;

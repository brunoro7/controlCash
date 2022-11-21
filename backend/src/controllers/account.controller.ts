import { Request, Response } from 'express';
import apiChecks from '../helpers/apiChecks';
import AccountInterface from '../interfaces/AccountInterface';
import accountServices from '../services/account.services';

const accountController = {
  
  async readAllAccounts(_req: Request, res: Response) {
    const arrayAccounts: AccountInterface[] = await accountServices.readAllAccounts();
    res.status(200).json(arrayAccounts);
  },

  async createNewAccount(_req: Request, res: Response) {
    const newAccount: AccountInterface = await accountServices.createNewAccount();
    res.status(201).json(newAccount);
  },

  async readAccountById(req: Request, res: Response) {
    const accountId = await apiChecks.checkIdError(req.params.id);
    const accountById: AccountInterface = await accountServices.readAccountById(accountId);
    res.status(200).json(accountById);
  }

};

export default accountController;

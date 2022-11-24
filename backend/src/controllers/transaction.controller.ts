import { Request, Response } from 'express';
import NotFoundError from '../errors/NotFoundError';
import jwtService from '../helpers/jwt.services';
import TransactionInterface from '../interfaces/TransactionInterface';
import UserInterface from '../interfaces/UserInterface';
import transactionServices from '../services/transaction.services';
import userServices from '../services/user.services';

const msgDefaultToUserNotFound = 'User not found';

const transactionsController = {
  async readAllTransactions(_req: Request, res: Response) {
    const arrayTransactions: TransactionInterface[] = await transactionServices
      .readAllTransactions();
    res.status(200).json(arrayTransactions);
  },

  async createNewTransaction(req: Request, res: Response) {
    const usernameToCashIn = req.body.username;
    const valueTransaction = req.body.transferValue;
    const userToCashOut = await jwtService.decodeToken(String(req.headers.authorization));
    const userToCredited: UserInterface = await userServices.readUserByUsername(usernameToCashIn);

    const today = new Date();
    const objToNewTransaction = {
      debitedAccountId: userToCashOut.accountId,
      creditedAccountId: userToCredited.accountId,
      value: Number(valueTransaction),
      createdAt: today,
    };

    await transactionServices.transferAction(
      valueTransaction,
      objToNewTransaction.debitedAccountId,
      objToNewTransaction.creditedAccountId,
    );
    const createNewTransaction = await transactionServices
      .createNewTransaction(objToNewTransaction);
    res.status(201).json(createNewTransaction);
  },

  async readTransactionsByUserId(req: Request, res: Response) {
    const user = await jwtService.decodeToken(String(req.headers.authorization));
    if(!user) {
      throw new NotFoundError(msgDefaultToUserNotFound);
    }
    const arrayTransactionsByUserId: TransactionInterface[] = await transactionServices
      .readTransactionsByUserId(user.id);
    res.status(200).json(arrayTransactionsByUserId);
  },

  async readTransactionsCashOutByUserId(req: Request, res: Response) {
    const user = await jwtService.decodeToken(String(req.headers.authorization));
    if(!user) {
      throw new NotFoundError(msgDefaultToUserNotFound);
    }
    const arrayTransactionsCashOutByUserId: TransactionInterface[] = await transactionServices
      .readTransactionsCashOutByUserId(user.id);
    res.status(200).json(arrayTransactionsCashOutByUserId);
  },

  async readTransactionsCashInByUserId(req: Request, res: Response) {
    const user = await jwtService.decodeToken(String(req.headers.authorization));
    if(!user) {
      throw new NotFoundError(msgDefaultToUserNotFound);
    }
    const arrayTransactionsCashInByUserId: TransactionInterface[] = await transactionServices
      .readTransactionsCashInByUserId(user.id);
    res.status(200).json(arrayTransactionsCashInByUserId);
  },

  async readTransactionsDateByUserId(req: Request, res: Response) {
    const user = await jwtService.decodeToken(String(req.headers.authorization));
    if(!user) {
      throw new NotFoundError(msgDefaultToUserNotFound);
    }
    const arrayTransactionsDateByUserId: TransactionInterface[] = await transactionServices
      .readTransactionsDateByUserId(String(req.body.date));
    res.status(200).json(arrayTransactionsDateByUserId);
  }

};

export default transactionsController;

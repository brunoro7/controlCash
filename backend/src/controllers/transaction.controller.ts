import { Request, Response } from 'express';
import TransactionInterface from '../interfaces/TransactionInterface';
import transactionServices from '../services/transaction.services';

const transactionsController = {
  async readAllTransactions(_req: Request, res: Response) {
    const arrayTransactions: TransactionInterface[] = await transactionServices
      .readAllTransactions();
    res.status(200).json(arrayTransactions);
  }
};

export default transactionsController;

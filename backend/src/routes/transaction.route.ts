import { Router } from 'express';
import transactionController from '../controllers/transaction.controller';
import validateToken from '../middlewares/validateToken';

const transactionRouter: Router = Router();

transactionRouter.post('/', validateToken, transactionController.createNewTransaction);

transactionRouter.get('/:id',
  validateToken, transactionController.readTransactionsByUserId);
transactionRouter.get('/:id/cashout',
  validateToken, transactionController.readTransactionsCashOutByUserId);
transactionRouter.get('/:id/cashin',
  validateToken, transactionController.readTransactionsCashInByUserId);
transactionRouter.get('/:id/date',
  validateToken, transactionController.readTransactionsDateByUserId);

transactionRouter.get('/', transactionController.readAllTransactions);

export default transactionRouter;

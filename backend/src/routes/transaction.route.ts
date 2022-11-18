import { Router } from 'express';
import transactionController from '../controllers/transaction.controller';

const transactionRouter: Router = Router();

transactionRouter.get('/', transactionController.readAllTransactions);

export default transactionRouter;

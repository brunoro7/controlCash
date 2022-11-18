import { Router } from 'express';
import accountController from '../controllers/account.controller';

const accountRouter: Router = Router();

accountRouter.post('/', accountController.createNewAccount);
accountRouter.get('/', accountController.readAllAccounts);

export default accountRouter;

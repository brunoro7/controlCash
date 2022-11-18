import { Router } from 'express';
import accountController from '../controllers/account.controller';

const accountRouter: Router = Router();

accountRouter.get('/', accountController.readAllAccounts);

export default accountRouter;

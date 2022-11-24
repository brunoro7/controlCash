import { Router } from 'express';
import userController from '../controllers/user.controller';

const userRouter: Router = Router();

userRouter.post('/', userController.createNewUser);
userRouter.get('/:id', userController.readUserById);
// userRouter.get('/', userController.readAllUsers);

export default userRouter;

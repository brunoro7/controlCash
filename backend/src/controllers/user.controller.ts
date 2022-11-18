import { Request, Response } from 'express';
import UserInterface from '../interfaces/UserInterface';
import userServices from '../services/user.services';

const userController = {
  async readAllUsers(_req: Request, res: Response) {
    const arrayUsers: UserInterface[] = await userServices.readAllUsers();
    res.status(200).json(arrayUsers);
  }
};

export default userController;

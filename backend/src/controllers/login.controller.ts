import { Request, Response } from 'express';
import loginServices from '../services/login.services';
import usersService from '../services/user.services';
import jwtServices from '../helpers/jwt.services';

const loginController = {
  async post(req: Request, res: Response) {
    const { username } = req.body;
    const data = await usersService.readUserByUsername(username);

    const user = {...data};
    const id = data.id;

    await loginServices.checkPassword(req.body.password, user.password);

    const { userNoPass, token } = await jwtServices.createToken({ ...user, id });

    res.status(201).json({ ...userNoPass, token });
  },
};

export default loginController;

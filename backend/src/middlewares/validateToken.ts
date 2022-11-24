import { NextFunction, Request, Response } from 'express';
import jwtServices from '../helpers/jwt.services';

const userToken = async (req: Request, _res: Response, next: NextFunction) => {
  const auth = await jwtServices.verifyExistsToken(String(req.headers.authorization));
  await jwtServices.decodeToken(auth);
  next();
};

export default userToken;

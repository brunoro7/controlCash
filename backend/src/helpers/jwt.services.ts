import jwt from 'jsonwebtoken';
import TokenNotFound from '../errors/TokenNotFound';
import InvalidTokenError from '../errors/InvalidTokenError';
import UserInterface from '../interfaces/UserInterface';

const jwtTempSecret = process.env.JWT_SECRET || '123456';

const jwtService = {
  async createToken(user: UserInterface) {
    const { password: _, ...userNoPass } = user;

    const token = jwt.sign({ data: user }, jwtTempSecret, {
      expiresIn: '1d',
      algorithm: 'HS256',
    });

    return { userNoPass, token };
  },

  async decodeToken(token: string) {
    try {
      const response = jwt.verify(token, jwtTempSecret);
      return response;
    } catch (_error) {
      throw new InvalidTokenError('Invalid Token');
    }
  },

  async verifyExistsToken(authorization: string) {
    if (!authorization) {
      throw new TokenNotFound('Token not found.');
    }
    return authorization;
  },
};

export default jwtService;

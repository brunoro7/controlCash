import express from 'express';
require('express-async-errors');
import cors from 'cors';
import helmet from 'helmet';

import expressAsyncErrors from './middlewares/expressAsyncErrors';

import accountRoute from './routes/account.route';
import transactionRoute from './routes/transaction.route';
import userRoute from './routes/user.route';

const api = express();
api.use(express.json());

// security
api.use(cors());
api.use(helmet());

api.use('/account', accountRoute);
api.use('/transaction', transactionRoute);
api.use('/user', userRoute);

// o express-async-errors deve ser sempre o último '.use' antes do export;
api.use(expressAsyncErrors);

export default api;

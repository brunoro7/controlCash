import { Model, INTEGER, DECIMAL } from 'sequelize';
import db from '.';

import Transaction from './Transaction';
import User from './User';

class Account extends Model {
  id!: number;
  balance!: number;
}

Account.init({
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER
  },
  balance: {
    type: DECIMAL(9,2)
  },
}, {
  sequelize: db,
  timestamps: false,
  modelName: 'Account',
  tableName: 'accounts'
});

Account.hasOne(User, { foreignKey: 'accountId', as: 'account'});

Account.hasMany(Transaction, { foreignKey: 'creditedAccountId', as: 'credited_AccountId'});

Account.hasMany(Transaction, { foreignKey: 'debitedAccountId', as: 'debited_AccountId'});

export default Account;

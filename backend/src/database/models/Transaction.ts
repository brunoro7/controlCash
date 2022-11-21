import { Model, INTEGER, DECIMAL, DATE } from 'sequelize';
import db from '.';

class Transaction extends Model {
  id?: number;
  debitedAccountId!: number;
  creditedAccountId!: number;
  value!: number;
  createdAt!: string;
}

Transaction.init({
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER
  },
  debitedAccountId: {
    allowNull: true,
    type: INTEGER,
    references: {
      model: 'Account',
      key: 'id'
    }
  },
  creditedAccountId: {
    allowNull: true,
    type: INTEGER,
    references: {
      model: 'Account',
      key: 'id'
    }
  },
  value: {
    allowNull: true,
    type: DECIMAL(9,2)
  },
  createdAt: {
    allowNull: true,
    type: DATE
  },
}, {
  sequelize: db,
  timestamps: false,
  modelName: 'Transaction',
  tableName: 'transactions'
});

export default Transaction;

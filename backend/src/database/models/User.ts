import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class User extends Model {
  id?: number;
  username!: string;
  password!: string;
  accountId?: number;
}

User.init({
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER
  },
  username: {
    allowNull: false,
    type: STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: STRING,
  },
  accountId: {
    type: INTEGER,
    references: {
      model: 'Account',
      key: 'id'
    },
    unique: true
  }
}, {
  sequelize: db,
  timestamps: false,
  modelName: 'User',
  tableName: 'users'
});

export default User;

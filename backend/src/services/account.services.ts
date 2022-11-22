import Account from '../database/models/Account';
import AccountInterface from '../interfaces/AccountInterface';
import DbFailCreate from '../errors/DbFailCreate';
import DbFailFind from '../errors/DbFailFind';
import NotFoundError from '../errors/NotFoundError';

const messageDbError = 'Something was whrong, try again in few seconds.';

const accountServices = {

  async createNewAccount(): Promise<AccountInterface> {
    const defaultValue = 100.00;
    const accountObj = {
      balance: defaultValue,
    };

    const { dataValues } = await Account.create(accountObj);
    const newAccount = dataValues;

    if(!newAccount) {
      throw new DbFailCreate(messageDbError);
    }
    return newAccount as AccountInterface;
  },

  async readAllAccounts(): Promise<AccountInterface[]> {
    const arrayAccounts = await Account.findAll();
    if(!arrayAccounts) {
      throw new DbFailFind(messageDbError);
    }
    return arrayAccounts as AccountInterface[];
  },

  async readAccountById(accountId: number): Promise<AccountInterface> {
    const accountById = await Account.findOne(
      { where: { id: accountId }, raw: true },
    );
    if(!accountById) {
      throw new NotFoundError('Account not find with this \'id\'.');
    }
    return accountById as AccountInterface;
  },

  async updateAccountBalance(
    accountId: number, valueToUpdate: number): Promise<boolean> {
    const accountUpdated = await Account.update({ 
      balance: valueToUpdate},
    {where: { id: accountId }});

    console.log(accountUpdated);

    if(!accountUpdated) {
      throw new NotFoundError('Account not find with this \'id\'.');
    }

    return true;
  }

};

export default accountServices;

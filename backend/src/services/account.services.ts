import Account from '../database/models/Account';
import AccountInterface from '../interfaces/AccountInterface';
import DbFailCreate from '../errors/DbFailCreate';
import DbFailFind from '../errors/DbFailFind';

const accountServices = {

  async createNewAccount(): Promise<AccountInterface> {
    const defaultValue = 100.00;
    const accountObj = {
      balance: defaultValue,
    };

    const { dataValues } = await Account.create(accountObj);
    const newAccount = dataValues;

    if(!newAccount) {
      throw new DbFailCreate('Something whrong, try again in few seconds.');
    }
    return newAccount as AccountInterface;
  },

  async readAllAccounts(): Promise<AccountInterface[]> {
    const arrayAccounts = await Account.findAll();
    if(!arrayAccounts) {
      throw new DbFailFind('Something whrong, try again in few seconds.');
    }
    return arrayAccounts as AccountInterface[];
  }

};

export default accountServices;

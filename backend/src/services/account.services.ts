import Account from '../database/models/Account';
import AccountInterface from '../interfaces/AccountInterface';
import NotFoundError from '../errors/NotFoundError';

const accountServices = {
  async readAllAccounts(): Promise<AccountInterface[]> {
    const arrayAccounts = await Account.findAll();
    if(!arrayAccounts) {
      throw new NotFoundError('Something whrong, try again in few seconds.');
    }
    return arrayAccounts as AccountInterface[];
  }
};

export default accountServices;

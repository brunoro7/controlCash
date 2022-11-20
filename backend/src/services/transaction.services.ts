import Transaction from '../database/models/Transaction';
import TransactionInterface from '../interfaces/TransactionInterface';
import NotFoundError from '../errors/NotFoundError';
import ReqBodyTransactionInterface from '../interfaces/ReqBodyTransactionInterface';
import AccountTranferDuplicate from '../errors/AccountTranferDuplicate';
import accountServices from './account.services';
import AccountInsufficientBalance from '../errors/AccountInsufficientBalance';

const msgDefaultToNotFoundErros = 'Something whrong, try again in few seconds.';

const transactionServices = {

  async readAllTransactions(): Promise<TransactionInterface[]> {
    const arrayTransactions = await Transaction.findAll();
    if(!arrayTransactions) {
      throw new NotFoundError(msgDefaultToNotFoundErros);
    }
    return arrayTransactions as TransactionInterface[];
  },

  async createNewTransaction(
    objToNewTransaction: ReqBodyTransactionInterface): Promise<TransactionInterface> {
    const newTransactions = await Transaction.create({...objToNewTransaction});
    if(!newTransactions) {
      throw new NotFoundError(msgDefaultToNotFoundErros);
    }
    return newTransactions as TransactionInterface;
  },

  async transferAction(
    valueTransaction: number,
    debitedAccountId: number,
    creditedAccountId: number,
  ): Promise<object> {

    if(debitedAccountId === creditedAccountId) {
      throw new AccountTranferDuplicate(
        'The destination of the \'credit account\' must be different from the \'debit account\'.');
    }
    const debitedAccount = await accountServices.readAccountById(debitedAccountId);
    const creditedAccount = await accountServices.readAccountById(creditedAccountId);
    if(Number(debitedAccount.balance) < valueTransaction) {
      throw new AccountInsufficientBalance('Insufficient \'balance\' to perform a transaction.');
    }
    const valueToUpdateDebited = Number(debitedAccount.balance) - valueTransaction;
    const valueToUpdateCredited = Number(creditedAccount.balance) + valueTransaction;

    await accountServices.updateAccountBalance(debitedAccountId, valueToUpdateDebited);
    await accountServices.updateAccountBalance(creditedAccountId, valueToUpdateCredited);

    return { transferSuccess: true };
  },

  async readTransactionsByUserId(userId: number): Promise<TransactionInterface[]> {
    const arrayTransactionsByUserId = await Transaction.findAll();
    const filterByUserId = arrayTransactionsByUserId
      .filter((item) => {
        if(item.dataValues.debitedAccountId === userId
          || item.dataValues.creditedAccountId === userId) return item;
      });
    if(!filterByUserId) {
      throw new NotFoundError(msgDefaultToNotFoundErros);
    }
    return filterByUserId as TransactionInterface[];
  },

  async readTransactionsCashOutByUserId(userId: number): Promise<TransactionInterface[]> {
    const arrayTransactionsCashOutByUserId = await Transaction.findAll();
    const filterByCashOut = arrayTransactionsCashOutByUserId
      .filter((item) => {
        if(item.dataValues.debitedAccountId === userId) return item;
      });
    if(!filterByCashOut) {
      throw new NotFoundError(msgDefaultToNotFoundErros);
    }
    return filterByCashOut as TransactionInterface[];
  },

  async readTransactionsCashInByUserId(userId: number): Promise<TransactionInterface[]> {
    const arrayTransactionsCashInByUserId = await Transaction.findAll();
    const filterByCashIn = arrayTransactionsCashInByUserId
      .filter((item) => {
        if(item.dataValues.creditedAccountId === userId) return item;
      });
    if(!filterByCashIn) {
      throw new NotFoundError(msgDefaultToNotFoundErros);
    }
    return filterByCashIn as TransactionInterface[];
  },

  async readTransactionsDateByUserId(
    dateToCompar: string): Promise<TransactionInterface[]> {
    const arrayTransactionsDateByUserId = await Transaction.findAll();
    const filterByDate = arrayTransactionsDateByUserId
      .filter((item) => {
        if(item.dataValues.createdAt === dateToCompar) return item;
      });
    if(!filterByDate) {
      throw new NotFoundError(msgDefaultToNotFoundErros);
    }
    return filterByDate as TransactionInterface[];
  }

};

export default transactionServices;

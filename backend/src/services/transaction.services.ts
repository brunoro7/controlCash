import Transaction from '../database/models/Transaction';
import TransactionInterface from '../interfaces/TransactionInterface';
import NotFoundError from '../errors/NotFoundError';

const transactionServices = {
  async readAllTransactions(): Promise<TransactionInterface[]> {
    const arrayTransactions = await Transaction.findAll();
    if(!arrayTransactions) {
      throw new NotFoundError('Something whrong, try again in few seconds.');
    }
    return arrayTransactions as TransactionInterface[];
  }
};

export default transactionServices;

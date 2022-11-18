import TransactionInterface from '../../../interfaces/TransactionInterface';

const transactionMock: TransactionInterface = {
  id: 1,
  debitedAccountId: 1,
  creditedAccountId: 2,
  value: 50.00,
  createdAt: '2022-11-17T00:00:00.000Z',
};

export default transactionMock;

interface TransactionInterface {
  id: number,
  debitedAccountId: number
  creditedAccountId: number
  value: number
  createdAt: string
}

export default TransactionInterface;

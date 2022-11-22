interface ReqBodyTransactionInterface {
  debitedAccountId: number
  creditedAccountId: number
  value: number
  createdAt: Date
}

export default ReqBodyTransactionInterface;

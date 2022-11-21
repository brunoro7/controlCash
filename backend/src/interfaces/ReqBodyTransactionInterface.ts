interface ReqBodyTransactionInterface {
  debitedAccountId: number
  creditedAccountId: number
  value: number
  createdAt: string
}

export default ReqBodyTransactionInterface;

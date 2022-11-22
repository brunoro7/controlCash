interface Transaction extends React.FC {
  createdAt: string,
  creditedAccountId: number,
  debitedAccountId: number,
  id: number,
  value: number,
}

export default Transaction;
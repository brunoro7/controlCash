class AccountInsufficientBalance extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = 'AccountInsufficientBalance';
    this.status = 401;
  }
}

export default AccountInsufficientBalance;

class AccountTranferDuplicate extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = 'AccountTranferDuplicate';
    this.status = 404;
  }
}

export default AccountTranferDuplicate;

class DbFail extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = 'DbFail';
    this.status = 500;
  }
}

export default DbFail;

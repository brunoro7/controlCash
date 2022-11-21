class DbFailCreate extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = 'DbFailCreate';
    this.status = 500;
  }
}

export default DbFailCreate;

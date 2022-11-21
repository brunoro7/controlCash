class TokenNotFound extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = 'TokenNotFound';
    this.status = 401;
  }
}

export default TokenNotFound;

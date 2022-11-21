class InvalidTokenError extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = 'InvalidTokenError';
    this.status = 401;
  }
}

export default InvalidTokenError;

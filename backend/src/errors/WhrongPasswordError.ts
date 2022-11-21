class WhrongPasswordError extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = 'WhrongPasswordError';
    this.status = 401;
  }
}

export default WhrongPasswordError;

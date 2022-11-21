class userAlreadyExistsError extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = 'userAlreadyExistsError';
    this.status = 500;
  }
}

export default userAlreadyExistsError;

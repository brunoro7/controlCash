class ApiChecksFail extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = 'ApiChecksFail';
    this.status = 500;
  }
}

export default ApiChecksFail;

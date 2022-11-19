class InvalidLengthPassword extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = 'InvalidLengthPassword';
    this.status = 500;
  }
}

export default InvalidLengthPassword;

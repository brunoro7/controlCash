class InvalidPasswordType extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = 'InvalidPasswordType';
    this.status = 500;
  }
}

export default InvalidPasswordType;

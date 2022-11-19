class InvalidLengthUsername extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = 'InvalidLengthUsername';
    this.status = 500;
  }
}

export default InvalidLengthUsername;

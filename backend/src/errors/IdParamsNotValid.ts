class IdParamsNotValid extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = 'IdParamsNotValid';
    this.status = 500;
  }
}

export default IdParamsNotValid;

import IdParamsNotValid from '../errors/IdParamsNotValid';

const apiChecks = {

  async checkIdError(accountId: string): Promise<number> {
    const regexChar = /^[A-Za-z]$/i.test(accountId);
    if(!accountId || regexChar === true ) {
      throw new IdParamsNotValid(
        `The 'id' is equals '${accountId}' in params and is not a valid 'id'.`
      );
    }
    return Number(accountId);
  },

};

export default apiChecks;

import axios from 'axios';

const host = process.env.REACT_APP_HOSTNAME || 'localhost';
const port = process.env.REACT_APP_BACKEND_PORT || 3007;

const readTransactionsByUserIdCashIn = async (userId: number, token: string) => {
  try {
    const response = await axios.get(
      `http://${host}:${port}/transaction/${userId}/cashin`,
      { headers: { Authorization: token } },
    );

    return response;
  } catch (err: any) {
    return err.response;
  }
};

export default readTransactionsByUserIdCashIn;

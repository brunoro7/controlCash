import axios from 'axios';
import userToCreateTransfer from '../../interfaces/home/userToCreateTransfer';

const host = process.env.REACT_APP_HOSTNAME || 'localhost';
const port = process.env.REACT_APP_BACKEND_PORT || 3007;

const createNewTransaction = async (user: userToCreateTransfer, token: string) => {
  try {
    const response = await axios.post(
      `http://${host}:${port}/transaction/`,
        user,
      { headers: { Authorization: token } },
    );

    return response;
  } catch (err: any) {

    return err.response;
  }
};

export default createNewTransaction;

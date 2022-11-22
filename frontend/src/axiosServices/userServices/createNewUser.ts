import axios from 'axios';
import userBodyToCreate from '../../interfaces/user/userBodyToCreate';

const host = process.env.REACT_APP_HOSTNAME || 'localhost';
const port = process.env.REACT_APP_BACKEND_PORT || 3007;

const createNewUser = async (user: userBodyToCreate) => {
  try {
    const response = await axios.post(`http://${host}:${port}/user`, user);
    console.log(response.data)
    return response;
  } catch (err: any) {
    return err.response;
  }
};

export default createNewUser;

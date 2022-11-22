import axios from 'axios';
import userBodyToLogin from '../../interfaces/login/userBodyToLogin';

const host = process.env.REACT_APP_HOSTNAME || 'localhost';
const port = process.env.REACT_APP_BACKEND_PORT || 3007;

const login = async (user: userBodyToLogin) => {
  try {
    const response = await axios.post(`http://${host}:${port}/login`, user);
    return response;
  } catch (err: any) {
    return err.response;
  }
};

export default login;

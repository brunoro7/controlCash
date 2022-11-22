import axios from 'axios';

import 'dotenv/config';


const host = process.env.REACT_APP_HOSTNAME || 'localhost';
const port = process.env.REACT_APP_BACKEND_PORT || 3007;

const readAllUsers = async () => {
  try {
    const response = await axios.get(`http://${host}:${port}/user/`);
    return response;
  } catch (err: any) {
    return err.response;
  }
};

export default readAllUsers;

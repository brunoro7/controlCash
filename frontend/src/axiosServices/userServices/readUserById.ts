import axios from 'axios';

const host = process.env.REACT_APP_HOSTNAME || 'localhost';
const port = process.env.REACT_APP_BACKEND_PORT || 3007;

const readUserById = async (userId: number) => {
  try {
    const response = await axios.get(`http://${host}:${port}/user/${userId}`);
    return response;
  } catch (err: any) {
    return err.response;
  }
};

export default readUserById;

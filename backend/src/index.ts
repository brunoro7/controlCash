import api from './api';

const { BACKEND_PORT } = process.env;

const server = api.listen(
  BACKEND_PORT, () => console.log(
    `Server is running on PORT: ${BACKEND_PORT}`,
  )
);

export default server;

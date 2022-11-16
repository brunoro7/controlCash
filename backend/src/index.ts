import api from './api';

const { PORT } = process.env;

const server = api.listen(
  PORT, () => console.log(
    `Server is running on PORT: ${PORT}`,
  )
);

export default server;

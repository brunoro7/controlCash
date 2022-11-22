import 'dotenv/config';
import { Options } from 'sequelize';

const { POSTGRES_USER, POSTGRES_PASSWORD, DB_HOST, DB_PORT, POSTGRES_DB } = process.env;

const config: Options = {
  username: POSTGRES_USER || 'controlCashAdm',
  password: POSTGRES_PASSWORD || 'example',
  database: POSTGRES_DB || 'database_default',
  host: DB_HOST || 'localhost',
  port: Number(DB_PORT) || 8081,
  dialect: 'postgres',
};

module.exports = config;

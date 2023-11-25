import Knex from 'knex';
import { environs } from '../helpers/config';
const { DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD } = environs;

// Update with your config settings.
const knex = Knex({
  client: 'mysql',
  connection: {
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: './seeds',
  },
});

export const onDatabaseConnect = async (): Promise<void> => {
  await knex.raw('SELECT 1');
};
export default knex;

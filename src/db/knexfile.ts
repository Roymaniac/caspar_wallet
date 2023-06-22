import type { Knex } from "knex";
import dotenv from "dotenv";
import path from "path";

dotenv.config()
const PORT = Number(process.env.DB_PORT)

// Update with your config settings.


const config: object = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: PORT,
      database: 'caspar_wallet',
      user: 'root',
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    },
    seeds: {
      directory: './models'
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};


export default config
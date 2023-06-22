import { Knex, knex } from "knex";
import config from "./knexfile";

const environment: string = process.env.NODE_ENV || "development";
const db: Knex = knex(config[environment as keyof typeof config]);

export { db };


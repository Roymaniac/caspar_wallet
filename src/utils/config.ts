// config.ts
import 'dotenv/config';

export const environs = {
  DB_PORT: Number(process.env.DB_PORT),
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  NODE_ENV: process.env.NODE_ENV,
  jwt_secret: String(process.env.JWT_SECRET),
  host: process.env.MAILER_HOST,
  port: Number(process.env.MAILER_PORT),
  user: process.env.MAILER_USER,
  pass: process.env.MAILER_PASSWORD,
};

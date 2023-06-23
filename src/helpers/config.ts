// config.ts
export const config = {
    jwt_secret: String(process.env.JWT_SECRET),
    host: process.env.MAILER_HOST,
    port: Number(process.env.MAILER_PORT),
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASSWORD
  }
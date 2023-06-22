// config.ts
export const config = {
    jwt_secret: process.env.JWT_SECRET || 'default_secret', // Provide a default value if JWT_SECRET is not set
  }
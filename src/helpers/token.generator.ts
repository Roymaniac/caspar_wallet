import jwt from 'jsonwebtoken';
import { config } from './config';

// Generate JWT Token
export const generateJWTToken = (id: string): string => {
    return jwt.sign({ id }, config.jwt_secret, {
      expiresIn: "30d",
    });
  };

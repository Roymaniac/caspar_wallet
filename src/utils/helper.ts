import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { environs } from './config';

// Generate JWT Token
export const generateJWTToken = (id: string): string => {
  return jwt.sign({ id }, environs.jwt_secret, {
    expiresIn: '7d',
  });
};

export const hashPassword = (password: string, saltRounds: number) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = (password: string, userPassword: string) => {
  return bcrypt.compareSync(password, userPassword);
};
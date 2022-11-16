import jwt from 'jsonwebtoken';
import { User } from '../entities/User';

export type UserJWT = Omit<User, 'password'>

const generateJWT = (payload: UserJWT): string => {
  const token = jwt.sign(
    { data: payload, exp: '1d' }, 
    process.env.JWT_SECRET = 'hulkEsmaga', 
    {});
  return token;
};

export default generateJWT;
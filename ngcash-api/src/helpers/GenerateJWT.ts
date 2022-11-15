import jwt from 'jsonwebtoken';
import { User } from '../entities/User';

const generateJWT = (payload: User): string => {
  const token = jwt.sign(
    { data: payload, exp: '1d' }, 
    process.env.JWT_SECRET = 'hulkEsmaga', 
    {});
  return token;
};

export default generateJWT;
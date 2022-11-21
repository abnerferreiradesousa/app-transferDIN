import jwt from 'jsonwebtoken';
import {type User} from '../entities/User';

export type UserJWT = Omit<User, 'password'>;

const generateJWT = (payload: UserJWT): string => {
	const token = jwt.sign(
		{data: payload},
		process.env.JWT_SECRET = 'hulkEsmaga',
		{expiresIn: '1d'});
	return token;
};

export default generateJWT;

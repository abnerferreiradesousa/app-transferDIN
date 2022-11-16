import { Request } from 'express';
import { User } from '../entities/User';

export interface IErrorHandler extends Error {
    status: number,
}

export interface MyRequest extends Request {
  user?: User
}

export type UserLogin = Pick<User, 'username' | 'password'>

export type SimpleUser = {
  username: string,
  password: string,
  account: {
    balance: number
  }
}

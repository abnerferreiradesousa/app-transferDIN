import { Request } from 'express';
import { User } from '../entities/User';
import { UserJWT } from '../helpers/generateJWT';

export interface IErrorHandler extends Error {
    status: number,
}

export interface MyRequest extends Request {
  user?: UserJWT
}

export type UserLogin = Pick<User, 'username' | 'password'>

export type SimpleUser = {
  username: string,
  password: string,
  account: {
    balance: number
  }
}

export type TransferData = {
  usernameCredited: string,
  value: number
}

export type TransactionData = {
  value: number,
  debitedAccountId?: number,
  creditedAccountId?: number,
}

export type FilterInfo = {
  dataStart: Date,
  dataEnd: Date
  transactionType?: string,
}


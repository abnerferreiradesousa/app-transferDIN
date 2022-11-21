import {type Request} from 'express';
import {type Account} from '../entities/Account';
import {type Transaction} from '../entities/Transaction';
import {type User} from '../entities/User';
import {type UserJWT} from '../helpers/generateJWT';

export interface IErrorHandler extends Error {
	status: number;
}

export interface MyRequest extends Request {
	user?: UserJWT;
}

export type UserLogin = Pick<User, 'username' | 'password'>;

export type SimpleUser = {
	username: string;
	password: string;
	account: {
		balance: number;
	};
};

export type TransferData = {
	usernameCredited: string;
	value: number;
};

export type TransactionData = {
	value: number;
	debitedAccountId?: number;
	creditedAccountId?: number;
};

export type FilterInfo = {
	dataStart: Date;
	dataEnd: Date;
	transactionType?: string;
};

export interface IUserToken extends User {
	token: string;
}

export interface IAccountMaster extends Account {
	user: User;
}

export interface ITransactionMaster extends Transaction {
	account: IAccountMaster;
	account2: IAccountMaster;
}

export interface ITransactionSerial extends Transaction {
	debitedName: string;
	creditedName: string;
}

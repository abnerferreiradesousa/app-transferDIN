import axios from 'axios';
import {
	type IUserToken,
	type Transaction,
	type IUser,
	type ITransactionSerial,
	type FilterInfo,
	type TransferData,
	type IAccount} from '../interfaces';

const URL = 'http://localhost:3001';

export const login = async (username: string, password: string)
: Promise<IUserToken | void> => {
	try {
		const response = await axios.post(`${URL}/login`, {username, password});
		return response.data.userLogged;
	} catch (err:any) {
		throw new Error(err.response.data.message);
	}
};

export const register = async (username: string, password: string)
: Promise<IUserToken | void> => {
	try {
		const response = await axios.post(`${URL}/user`, {username, password});
		return response.data.user;
	} catch (err) {
		console.log(err);
	}
};

export const fetchTransactions = async (token: string | undefined)
: Promise<ITransactionSerial[]> => {
	const response = await axios.get(`${URL}/transaction`, {headers: {
		Authorization: token,
		}});
	return response.data.transactions;
};

export const fetchTransactionsByCashIn = async (
	token: string | undefined, dates?: FilterInfo
): Promise<ITransactionSerial[]> => {
	const response = await axios({
		data: dates,
		baseURL: `${URL}/transaction/cashin`,
		method: 'POST',
		headers: {
			Authorization: token,
		}});
	return response.data.transactions;
};

export const fetchTransactionsByCashOut = async (
	token: string | undefined, dates?: FilterInfo)
: Promise<ITransactionSerial[]> => {
	const response = await axios({
		data: dates,
		baseURL: `${URL}/transaction/cashout`,
		method: 'POST',
		headers: {
			Authorization: token,
		}});
	return response.data.transactions;
};

export const transfer = async (token: string | undefined, transferData: TransferData)
: Promise<Transaction[]> => {
	const response = await axios({
		data: transferData,
		baseURL: `${URL}/transaction`,
		method: 'POST',
		headers: {
			Authorization: token,
		}});
	return response.data.transactions;
};

export const getBalance = async (token: string | undefined): Promise<IAccount> => {
	const response = await axios({
		baseURL: `${URL}/account`,
		method: 'GET',
		headers: {
			Authorization: token,
		}});
	return response.data.account;
};

export const fetchByDate = async (token: string | undefined, dates: FilterInfo)
: Promise<ITransactionSerial[]> => {
	const response = await axios({
		data: dates,
		baseURL: `${URL}/transaction/date`,
		method: 'POST',
		headers: {
			Authorization: token,
		}});
	return response.data.transactions;
};



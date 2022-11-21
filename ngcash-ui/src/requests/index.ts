import axios from 'axios';
import { IUserToken, Transaction, IUser, ITransactionSerial, FilterInfo, TransferData } from '../interfaces';

const URL = 'http://localhost:3001';

export const login = async (username: string, password: string)
: Promise<IUserToken | void> => {
    try {
        const response = await axios.post(`${URL}/login`, { username, password})
        return response.data.userLogged;
    } catch(err) {
        console.log(err)
    }
}

export const register = async (username: string, password: string)
: Promise<IUser | void> => {
    try {
        const response = await axios.post(`${URL}/user`, { username, password})
        return response.data.user;
    } catch(err) {
        console.log(err)
    }
}

export const fetchTransactions = async (token: string | null)
: Promise<ITransactionSerial[]> => {
    const response = await axios.get(`${URL}/transaction`, { headers: {
        Authorization: token
    }})
    return response.data.transactions;
}

export const fetchTransactionsByCashIn = async (token: string | null, dates?: FilterInfo)
: Promise<Transaction[]> => {
    const response = await axios({
        data: dates, 
        baseURL: `${URL}/transaction/cashin`, 
        method: "GET", 
        headers: {
            Authorization: token
        }})
    return response.data.transactions;
}

export const fetchTransactionsByCashOut = async (token: string | null, dates?: FilterInfo)
: Promise<Transaction[]> => {
    const response = await axios({
        data: dates, 
        baseURL: `${URL}/transaction/cashout`, 
        method: "GET", 
        headers: {
            Authorization: token
        }})
    return response.data.transactions;
}

export const transfer = async (token: string | null, transferData: TransferData)
: Promise<Transaction[]> => {
    const response = await axios({
        data: transferData, 
        baseURL: `${URL}/transaction`, 
        method: "POST", 
        headers: {
            Authorization: token
        }})
    return response.data.transactions;
}
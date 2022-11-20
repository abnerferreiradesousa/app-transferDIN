import axios from 'axios';
import { IUserToken, Transaction, IUser } from '../interfaces';

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
: Promise<Transaction[]> => {
    const response = await axios.get(`${URL}/transaction`, { headers: {
        Authorization: token
    }})
    return response.data.transactions;
}
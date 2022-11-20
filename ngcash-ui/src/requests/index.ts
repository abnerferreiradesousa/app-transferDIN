import axios from 'axios';
import { Token, Transaction, User } from '../interfaces';

const URL = 'http://localhost:3001';

export const login = async (username: string, password: string)
: Promise<Token | void> => {
    try {
        const response = await axios.post(`${URL}/login`, { username, password})
        return response.data;
    } catch(err) {
        console.log(err)
    }
}

export const register = async (username: string, password: string)
: Promise<User | void> => {
    try {
        const response = await axios.post(`${URL}/user`, { username, password})
        return response.data.user;
    } catch(err) {
        console.log(err)
    }
}

export const fetchTransactions = async (token: string | null)
: Promise<Transaction[] | [] | void> => {
    try {
        const response = await axios.get(`${URL}/transaction`)
        return response.data;
    } catch(err) {
        console.log(err)
    }
}
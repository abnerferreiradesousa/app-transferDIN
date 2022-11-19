import axios from 'axios';
import { Token, User } from '../interfaces';

const URL = 'http://localhost:3001';

export const login = async (username: string, password: string)
: Promise<Token | void> => {
    try {
        const response = await axios.post(`${URL}/login`, { username, password})
        return await response.data;
    } catch(err) {
        console.log(err)
    }
}

export const register = async (username: string, password: string)
: Promise<User | void> => {
    try {
        const response = await axios.post(`${URL}/user`, { username, password})
        return await response.data;
    } catch(err) {
        console.log(err)
    }
}
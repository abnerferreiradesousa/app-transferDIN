import axios from 'axios';
import { User } from '../interfaces';

const URL = 'http://localhost:3000';

export const login = async (name: string, password: string): Promise<string> => {
    const response = await axios.post(`${URL}/login`, { 
        name,
        password,
    })
    return response.data;
}

export const register = async (name: string, password: string): Promise<User> => {
    const response = await axios.post(`${URL}/user`, { 
        name,
        password,
    })
    return response.data;
}
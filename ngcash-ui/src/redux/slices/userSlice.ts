import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { IUserToken } from '../../interfaces'

const initialState: IUserToken = {
  id: 0,
  username: '',
  password: '',
  account: {
    balance: 0,
    id: 0,
  },
  token: ''
}


export const handleUser = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserToken>) => {
        return {
          ...state,
          ...action.payload
        };
    },
  },
})

export const { setUser } = handleUser.actions

export const selectUser = (state: RootState) => state.user;

export default handleUser.reducer
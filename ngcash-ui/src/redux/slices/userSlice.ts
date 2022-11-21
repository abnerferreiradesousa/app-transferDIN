import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { IAccount, IUserToken } from '../../interfaces'

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
    setAccount: (state, action: PayloadAction<IAccount>) => {
      state.account = action.payload;
    }
  },
})

export const { setUser, setAccount } = handleUser.actions

export const selectUser = (state: RootState) => state.user;

export default handleUser.reducer
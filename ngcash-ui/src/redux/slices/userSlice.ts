import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import type { User } from '../../interfaces'

const initialState: User = {
  id: 0,
  username: '',
  password: '',
  account: {
    balance: 0,
    id: 0,
  }
}


export const handleUser = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
        return {
          ...state,
          ...action.payload
        };
    },
  },
})

export const { setUser } = handleUser.actions

export const selectValue = (state: RootState) => {
  return state.user
}; 

export default handleUser.reducer
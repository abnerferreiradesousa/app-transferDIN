import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import type { User } from '../../interfaces'

export interface UserAction {
  user: User
}

const initialState: UserAction = {
  user: {
    id: 0,
    username: '',
    password: '',
    account: {
      balance: 0,
      id: 0,
    }
  }
}


export const handleUser = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
        state.user = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = handleUser.actions

export const selectValue = (state: RootState) => {
  return state.user.user
}; 

export default handleUser.reducer
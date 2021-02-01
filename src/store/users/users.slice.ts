import { createSlice } from '@reduxjs/toolkit';
import { usersInitialState, usersReducer } from '.';


export const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState, 
  reducers: usersReducer,
});

export const {
  actions: { 
    create: createUser,
    update: updateUser,
    delete: deleteUser,
  },
} = usersSlice;
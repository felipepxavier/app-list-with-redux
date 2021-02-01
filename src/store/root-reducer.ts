import { usersSlice } from './users/users.slice';
import { combineReducers } from "redux";

export const reducers = combineReducers({
  users: usersSlice.reducer         
 });

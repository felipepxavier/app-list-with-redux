import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { v1 as uuid } from 'uuid';
import { IUser } from '../../type';

export const usersReducer = {
  create: {
    reducer: (
      state: IUser[],
      action: PayloadAction<{ id: string; name: string; email: string, password: string, dateOfBirth: string, typeUser: string }>
    ) => {
      state.push(action.payload);
      toast.success('Usuário cadastrado com sucesso! ;)');
      
    },
    prepare: ({ name, email, password, dateOfBirth, typeUser }: 
      { name: string; email: string, password: string, dateOfBirth: string, typeUser: string }) => ({
      payload: {
        id: uuid(),
        name,
        email,
        password,
        dateOfBirth,
        typeUser
      },
    }),
  },
  update: {
    reducer: (
      state: IUser[],
      action: PayloadAction<{ id: string; name: string; email: string, password: string, dateOfBirth: string, typeUser: string }>
    ) => {
     
      const prevState = [...state];
      const novoState = prevState.map( user => {
        if(user.id === action.payload.id){
          return  action.payload
        }
        return user
      });
      toast.success('Usuário atualizado com sucesso! ;)');
      return novoState;
      
    },
    prepare: ({ id, name, email, password, dateOfBirth, typeUser }: 
      { id: string, name: string; email: string, password: string, dateOfBirth: string, typeUser: string }) => ({
      payload: {
        id,
        name,
        email,
        password,
        dateOfBirth,
        typeUser
      },
    }),
  },
  delete: {
    reducer: (
      state: IUser[],
      action: PayloadAction<{ id: string }>
    ) => {
      
      const prevState = [...state];
      const updateList = prevState.filter(user => user.id !== action.payload.id);

      toast.success('Usuário deletado com sucesso! ;) ');
      return updateList;
    },
    prepare: ({ id }: 
      { id: string }) => ({
      payload: {
        id,
      },
    }),
  }
};
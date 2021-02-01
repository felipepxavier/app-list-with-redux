import { v1 as uuid } from 'uuid';
import { IUser } from '../../type';

export const usersInitialState: IUser[] = [
  {
    id: uuid(),
    name: 'Javascript',
    email: 'felipe.sadler@gmail.com',
    password: '68476',
    dateOfBirth: '20/05/1994',
    typeUser: 'administrador'
  },
  {
    id: uuid(),
    name: 'ReactJS',
    email: 'working@gmail.com',
    password: '64446',
    dateOfBirth: '20/05/1994',
    typeUser: 'colaborador'
  },
];
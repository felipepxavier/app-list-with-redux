export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    dateOfBirth: string;
    typeUser: string;
  }
  
  export interface State {
    users: IUser[];
  }
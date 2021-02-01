import React, { FC } from 'react';
import { IUser } from '../../type';
import { User } from './User';
import * as S from './styles';

interface IUserList {
  users: IUser[]
}
export const UserList: FC<IUserList> = ({ users }) => {

  return (
    <>
      <S.List>
      <S.Header>
        <S.ItemCell width={200}>ID</S.ItemCell>
        <S.ItemCell width={200}>Nome</S.ItemCell>
        <S.ItemCell width={250}>E-mail</S.ItemCell>
        <S.ItemCell width={150}>Nascimento</S.ItemCell>
        <S.ItemCell width={150}>Tipo</S.ItemCell>
        <S.ItemCell width={100}>Ação</S.ItemCell>
        <S.ItemCell width={100}>Ação</S.ItemCell>
      </S.Header>
        {users &&
          users.map((user) => (
            <User key={user.id} user={user} />
          ))}
      </S.List>
     </>
  )
}
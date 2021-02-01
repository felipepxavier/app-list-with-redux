import React, { FC, useState, useRef } from 'react';
import { IUser } from '../../type';
import * as S from './styles';
import { deleteUser } from '../../store/users';
import { useDispatch } from 'react-redux';
import Modal, { ModalHandles } from './ModalEdit';

interface IUserProps {
  key: string;
  user: IUser
}

export const User: FC<IUserProps> = ({ user }) => {

  const dispatch = useDispatch();
  const modalRef = useRef<ModalHandles>(null);


  const handleUpdate = () => {
    modalRef.current?.handleToggleModal();
    modalRef.current?.setData(user);
  }
  const handleDelete = () => {
    dispatch(deleteUser({ id: user.id }))
  }

  return (
    <>
    <Modal ref={modalRef} />

    <S.Item>
      <S.ItemCell width={200}> <S.TextCell>{user.id}</S.TextCell></S.ItemCell>
      <S.ItemCell width={200}><S.TextCell>{user.name}</S.TextCell></S.ItemCell>
      <S.ItemCell width={250}><S.TextCell>{user.email}</S.TextCell></S.ItemCell>
      <S.ItemCell width={150}><S.TextCell>{user.dateOfBirth}</S.TextCell></S.ItemCell>
      <S.ItemCell width={150}><S.TextCell>{user.typeUser}</S.TextCell></S.ItemCell>
      <S.ItemCell width={100}><S.BtnAction onClick={handleUpdate} color="#3CB371"> Editar</S.BtnAction> </S.ItemCell>
      <S.ItemCell width={100}><S.BtnAction onClick={handleDelete} color="#CD5C5C"> Excluir</S.BtnAction></S.ItemCell>
    </S.Item>
    </>
  )
}
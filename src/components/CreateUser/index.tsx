import React, { useState, FC } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../../store/users';
import * as Yup from 'yup';
import useForm from "../../hooks/useForm";
import Input from '../Input';
import  * as S from './styles';
import SelectDefault from '../SelectDefault';
import { toast } from 'react-toastify';

interface ICreateUserProps { }

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Nome obrigatório'),
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  password: Yup.string()
    .required('Senha obrigatória')
    .min(4, 'A senha deve conter no mínimo de 4 caracteres'),
  confirmPassword: Yup.string().when('password', (senha: string, field: any) =>
    senha
      ? field.required().oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
      : field,
  ),
  dateOfBirth: Yup.string(),
  typeUser: Yup.string().required('Tipo de usuário obrigatório'),

});

const initialErrors = {
  name: false,
  email: false,
  password: false,
  confirmPassword: false,
  dateOfBirth: false,
  typeUser: false,
}


const options = [
  {
    value: 'administrador',
    label: 'Administrador',
    name: 'typeUser',
  },
  {
    value: 'colaborador',
    label: 'Colaborador',
    name: 'typeUser',
  },
  {
    value: 'gerente',
    label: 'Gerente',
    name: 'typeUser',
  }
]

export const CreateUser: FC<ICreateUserProps> = () => {
  const { values, handleChange, handleSubmit }  = useForm();
  const [erros, setErros] = useState(initialErrors);
  const dispatch = useDispatch();


  const handleCreateNewUser = async() => {

    try {
      await schema.validate(values, {
        abortEarly: false,
      })

      dispatch(createUser({ 
        name: values.name, 
        email: values.email,  
        password: values.password,
        dateOfBirth: values.dateOfBirth,
        typeUser: values.typeUser
      }));
      setErros(initialErrors)

    } catch (error) {
      const erros = error.inner;
      erros.forEach((erro: any )=> {   
           toast.warning(erro.message);
      })

      const errors = erros.reduce((total: any, erro: any )=> {
          const error = {[erro.path] : true};
          total = {...total, ...error}
          return total
      },{})

      setErros(errors)
    }
  };

  
  return (
    <S.Container>
      
      <S.Form onSubmit={handleSubmit(handleCreateNewUser)}>
        <Input
          onChange={handleChange}
          label="Novo usuario:*"
          error={erros.name}
          id="name"
          name="name"
        />
        <Input
          onChange={handleChange}
          label="E-mail:*"
          error={erros.email}
          id="email"
          name="email"
        />
        <Input
          onChange={handleChange}
          label="Senha:*"
          error={erros.password}
          id="password"
          name="password"
          isPassword
        />
        <Input
          onChange={handleChange}
          label="Confirmar senha:*"
          error={erros.confirmPassword}
          name="confirmPassword"
          isPassword
        />
        <Input
          onChange={handleChange}
          label="Data de nascimento:"
          name="dateOfBirth"
        />
        <SelectDefault
          error={erros.typeUser}
          onChange={handleChange}
          label="Tipo de usuário:*"
          placeholder="Selecionar..."
          options={options}
          name="typeUser"
          id="typeUser"
        />
        <S.ButtonCreate>Criar</S.ButtonCreate>
      </S.Form>
    </S.Container>
  )
}
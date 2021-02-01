import React, {
    useState,
    useCallback,
    forwardRef,
    useImperativeHandle,
  } from 'react';
  
import { FiX } from 'react-icons/fi';
import { updateUser } from '../../../store/users';
import * as Yup from 'yup';
import * as S from './styles';
import Modal from '../../../components/Modal';
import Input from '../../Input';
import useForm from '../../../hooks/useForm';
import SelectDefault from '../../SelectDefault';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
  
  export interface ModalHandles {
    handleToggleModal: () => void;
    setData: (arg: any) => void;
  }

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
  
  const ModalEdit: React.ForwardRefRenderFunction<ModalHandles> = (props, ref) => {
    const [open, setOpen] = useState(false);
    const [rowData, setRowData] = useState<any>(null);
    const { values, setValues, handleChange, handleSubmit }  = useForm();
    const dispatch = useDispatch();
  
    const setData = useCallback((data: any) => {
        const valuesCurrente = {
            ...data,
            confirmPassword: data.password,  
        }
      setRowData(valuesCurrente);
      setValues(valuesCurrente);
    }, [setValues]);

    const handleToggleModal = useCallback(() => {
      setOpen(!open);
      setRowData([]);
      setValues({});
    }, [open, setOpen, setValues]);
  
    useImperativeHandle(ref, () => {
      return {
        handleToggleModal,
        setData,
      };
    });
  
    if (!open) {
      return null;
    }

    const handleUpdateNewUser = async () => {

        try {
          await schema.validate(values, {
            abortEarly: false,
          })
        
          dispatch(updateUser({ 
            id: values.id,
            name: values.name, 
            email: values.email,  
            password: values.password,
            dateOfBirth: values.dateOfBirth,
            typeUser: values.typeUser
          }));
          setOpen(false);
    
        } catch (error) {
          const erros = error.inner;
           erros.forEach((erro: any )=> {
            toast.warning(erro.message);
          })

        }
      };
  
    return (
      <>
        <Modal id="portal-modal">
          <S.Header>
            <span>Editar cadastro</span>
  
                <FiX onClick={handleToggleModal} />
            </S.Header>
            <S.Form onSubmit={handleSubmit(handleUpdateNewUser)}>
                <Input
                onChange={handleChange}
                label="Novo usuario:*"
                defaultValue={rowData.name ? rowData.name : ''}
                id="name"
                name="name"
                />
                <Input
                onChange={handleChange}
                label="E-mail:*"
                defaultValue={rowData.email ? rowData.email : ''}
                id="email"
                name="email"
                />
                <Input
                onChange={handleChange}
                label="Senha:*"
                defaultValue={rowData.password ? rowData.password : ''}
                id="password"
                name="password"
                isPassword
                />
                <Input
                onChange={handleChange}
                label="Confirmar senha:*"
                defaultValue={rowData.confirmPassword ? rowData.confirmPassword : ''}
                name="confirmPassword"
                isPassword
                />
                <Input
                onChange={handleChange}
                label="Data de nascimento:"
                defaultValue={rowData.dateOfBirth ? rowData.dateOfBirth : ''}
                name="dateOfBirth"
                />
                <SelectDefault
                onChange={handleChange}
                label="Tipo de usuário:*"
                placeholder="Selecionar..."
                value={values.typeUser ? options.filter(opt => opt.value === values.typeUser) : 
                    options.filter(opt => opt.value === rowData.typeUser)}
                options={options}
                name="typeUser"
                id="typeUser"
                />
                <S.ButtonUpdate>Atualizar</S.ButtonUpdate>
            </S.Form>
          
        </Modal>
      </>
    );
  };
  
  export default forwardRef(ModalEdit);
  
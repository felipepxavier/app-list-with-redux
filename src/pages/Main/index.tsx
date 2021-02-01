import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../type';
import { UserList } from '../../components/UserList';
import { Container } from './styles';


const Main: React.FC = () => {
  const users = useSelector((state: State) => state.users);
  return (
    <Container> 
        <UserList users={users} /> 
    </Container>
  );
}

export default Main;
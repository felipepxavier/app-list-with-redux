import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from './styles';

const Header: React.FC = () => {
  
  return (
    <Container>
      <NavLink activeClassName="active" exact to="/">Listagem</NavLink>
      <NavLink activeClassName="active" exact to="/cadastrar">Criar Usuáro</NavLink>
    </Container>
  );
};

export default Header;

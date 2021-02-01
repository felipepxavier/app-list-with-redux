import React from 'react';
import { Wrapper } from './styles';
import Header from '../Header';

const DefaultLayout: React.FC = ({ children }) => (
  <>
    <Header />
    <Wrapper>{children}</Wrapper>
  </>
);

export default DefaultLayout;

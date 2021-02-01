import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    font-weight: 700;
    color: #9fa5ab;
  }

  a.active {
    color: #3483e6;
  }

  a:first-child {
    margin-right: 50px;
  }
`;

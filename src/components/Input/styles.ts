import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isError: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #f9f9fc;
  border: solid 1px #e4e7ee;
  border-radius: 5px;
  padding: 5px 15px;
  width: 100%;
  height: 35px;
  transition: 250ms;
  display: flex;
  align-items: center;
  color: #c5cdd6;

  & + div {
    margin-top: 25px;
  }

  ${props =>
    props.isError &&
    css`
      color: red;
      border-color: red;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #6799f8;
      border-color: #6799f8;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #6799f8;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    font-size: 1.1em;

    &::placeholder {
      color: #c5cdd6;
    }
  }

`;

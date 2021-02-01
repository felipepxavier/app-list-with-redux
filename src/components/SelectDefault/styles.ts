import styled, { css } from 'styled-components';
interface SelectProps {
  error: boolean
}
export const Container = styled.div<SelectProps>`
  width: 100%;
  max-width: 200px;
  margin-bottom: 20px;

  span {
    color: #9ca2b3;
    display: inline-block;
    margin-bottom: 4px;
    font-weight: 600;
  }

  .select-component__control {
    height: 40px;
  }

  .select-component-container,
  .select-component__control {
    height: 100%;
  }

  ${({ error }) =>
    error &&
    css`
        .select-component__control {
          border: solid 1px red;
        }
    `}

  .select-component__control--is-focused {
    box-shadow: none;
    
  }
`;

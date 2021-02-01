import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  span {
    color: #9ca2b3;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: bold;
  }

  svg {
    font-size: 28px;
    color: #ced1d9;
    cursor: pointer;
    transition: all 250ms;

    &:hover {
      color: #9ca2b3;
    }
  }
`;


export const Form = styled.form`
  width: 100%;
  max-width: 450px;


  .defaultInput {
    color: #9ca2b3;
    margin-bottom: 15px;
    font-weight: 600;
  }
`;

export const ButtonUpdate = styled.button`
    border: none;
    width: 100%;
    padding: 10px 25px;
    background-color: #3483e8;
    color: #ffffff;
    border-radius: 4px;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    opacity: 0.8;
    transition: opacity 250ms;

    &:hover {
        opacity: 1;
    }
`;


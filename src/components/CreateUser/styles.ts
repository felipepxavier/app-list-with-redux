import styled from 'styled-components';


export const Container = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 100px;
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

export const ButtonCreate = styled.button`
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


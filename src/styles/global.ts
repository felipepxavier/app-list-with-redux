import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  #root, body, html {
    -webkit-font-smoothing: antialiased;
  
  }

  body, input, button {
    font-family: "Roboto",sans-serif;
    font-size: 14px;
    background: #f3f4fb;
  }

  button {
    cursor: pointer;
  }
`;

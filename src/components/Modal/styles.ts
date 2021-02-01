import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  .container-btn {
    display: flex;
    justify-content: flex-end;
  }

  .modal {
    background: white;
    width: 450px;
    max-height: 100%;
    padding: 20px;
    border-radius: 10px;
    position: relative;
    animation: modal 0.3s forwards;
  }

  @keyframes modal {
    from {
      opacity: 0;
      transform: translate3d(0, -30px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .fechar {
    width: 40px;
    font-size: 32px;
    color: #ced1d9;
    cursor: pointer;
    transition: 250ms;
    float: right;
    top: 0;
    right: 0;

    &:hover {
      color: #ababad;
    }
  }
`;

export const Content = styled.article`
  width: 100%;
  padding: 10px 20px;

  h2 {
    margin-bottom: 10px;
    font-size: 1.6em;
    color: #3a3a3a;
  }

  p {
    color: #333;
    font-size: 1.3em;
    margin-bottom: 4px;
    line-height: 1.5em;

    border-top: 1px solid #333;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const Main = styled.div``;

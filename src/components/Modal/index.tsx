import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { Container, Main } from './styles';

interface ModalProps {
  children: React.ReactNode;
  id: string;
  styles?: any;
}

const Modal: React.FC<ModalProps> = ({
  styles: Styles = Main,
  id,
  children,
}) => {
  const el = useRef(
    document.getElementById(id) || document.createElement('div'),
  );

  return createPortal(
    <Container>
      <Styles>
        <div className="modal">{children}</div>
      </Styles>
    </Container>,
    el.current,
  );
};

export default Modal;

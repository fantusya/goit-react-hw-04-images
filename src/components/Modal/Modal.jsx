// import React, { Component } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { ModalBackdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const onEscClick = e => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', onEscClick);

    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) onClose();
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};

// USING CLASS
// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = event => {
//     if (event.currentTarget === event.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <ModalBackdrop onClick={this.handleBackdropClick}>
//         <ModalContent>{this.props.children}</ModalContent>
//       </ModalBackdrop>,
//       modalRoot
//     );
//   }
// }

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, Modal, Description } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export const Modals = ({ img, tags, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleEscClose);
    return () => {
      window.removeEventListener('keydown', handleEscClose);
    };
  });
  
  const handleEscClose = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClose = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClose}>
      <Modal src={img} alt=""/>
      <Description>{tags}</Description>
    </Overlay>,
    modalRoot
  );
};

Modals.propTypes = {
  img: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, Modal, Description } from './Modal.styled';

export function Modals({img, tags, onClose}) {
  useEffect(() => {
    const closeModal = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', closeModal);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', closeModal);
      document.body.style.overflow = ' visible';
    };
  }, [onClose]);

    return (
      <Overlay onClick={onClose}>
        <Modal src={`${img}`} alt={`${tags}`} />
        <Description>{`${tags}`}</Description>
      </Overlay>
    );
}

Modals.propTypes = {
  img: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
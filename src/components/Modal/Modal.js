import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.removeAttribute('style');
    }
  }, [isOpen])

  if (!isOpen) return null;

  return createPortal(
    <div className="Modal">
      <div className="Modal-Content">
        <button
          className="Modal-CloseButton"
          type="button"
          onClick={onClose}
        />
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
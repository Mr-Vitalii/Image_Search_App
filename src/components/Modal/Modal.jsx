import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalContent, ModalImage, Overlay } from "./Modal.styled";

const modalRoot = document.querySelector("#modal");

const Modal = ({ tag, imageUrl, onClose }) => {
  useEffect(() => {

    const handelKeydown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handelKeydown);

    return () => {
      window.removeEventListener("keydown", handelKeydown);
    };
  }, [onClose]);

  

  const handelOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handelOverlayClick}>
      <ModalContent>
        <ModalImage src={imageUrl} alt={`${tag}`} />
      </ModalContent>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  tag: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export { Modal };

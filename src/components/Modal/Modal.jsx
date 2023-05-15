import PropTypes from "prop-types";
import { Component } from "react";
import { createPortal } from "react-dom";
import { ModalContent, ModalImage, Overlay } from "./Modal.styled";

const modalRoot = document.querySelector("#modal");

class Modal extends Component {
  static propTypes = {
    tag: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handelKeydow);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handelKeydow);
  }

  handelKeydow = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handelOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { imageUrl, tag } = this.props;

    return createPortal(
      <Overlay onClick={this.handelOverlayClick}>
        <ModalContent>
          <ModalImage src={imageUrl} alt={`${tag}`} />
        </ModalContent>
      </Overlay>,
      modalRoot
    );
  }
}

export { Modal };

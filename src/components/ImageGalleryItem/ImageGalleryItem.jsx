import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal } from "../Modal/Modal";
import { GalleryImage, GalleryItem } from "./ImageGalleryItem.styled";

class ImageGalleryItem extends Component {
  static propTypes = {
    image: PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  };

  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { largeImageURL, webformatURL, tags } = this.props.image;

    return (
      <GalleryItem>
        <GalleryImage
          onClick={this.openModal}
          src={webformatURL}
          alt={`${tags}`}
        />
        {isModalOpen && (
          <Modal
            tag={tags}
            imageUrl={largeImageURL}
            onClose={this.closeModal}
          />
        )}
      </GalleryItem>
    );
  }
}

export { ImageGalleryItem };

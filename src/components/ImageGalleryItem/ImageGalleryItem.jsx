import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "../Modal/Modal";
import { GalleryImage, GalleryItem } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ image: { largeImageURL, webformatURL, tags } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <GalleryItem>
      <GalleryImage onClick={openModal} src={webformatURL} alt={`${tags}`} />
      {isModalOpen && (
        <Modal tag={tags} imageUrl={largeImageURL} onClose={closeModal} />
      )}
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};

export { ImageGalleryItem };

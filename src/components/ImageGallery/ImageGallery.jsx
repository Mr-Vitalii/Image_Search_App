import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { GalleryList } from "./ImageGallery.styled";

const ImageGallery = ({ images, getRef }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    getRef(containerRef);
  }, [getRef]);

  return (
    <GalleryList ref={containerRef}>
      {images.map((image) => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      getRef: PropTypes.func.isRequired,
    })
  ),
};

export { ImageGallery };

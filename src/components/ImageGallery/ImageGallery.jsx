import React, { Component } from "react";
import PropTypes from "prop-types";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { GalleryList } from "./ImageGallery.styled";

class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ),
  };

  render() {
    const { images } = this.props;

    return (
      <GalleryList>
        {images.map((image) => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </GalleryList>
    );
  }
}

export { ImageGallery };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';

import { ImageItem, Image, ModalImage } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformat, alt, largeImage } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <ImageItem onClick={this.toggleModal}>
          <Image src={webformat} alt={alt} width="350" loading="lazy" />
        </ImageItem>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <ModalImage src={largeImage} alt={alt} loading="lazy" />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformat: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
};

// import React, { Component } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';

import { ImageItem, Image, ModalImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformat, alt, largeImage }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ImageItem onClick={() => setShowModal(!showModal)}>
        <Image src={webformat} alt={alt} width="350" loading="lazy" />
      </ImageItem>
      {showModal && (
        <Modal onClose={() => setShowModal(!showModal)}>
          <ModalImage src={largeImage} alt={alt} loading="lazy" />
        </Modal>
      )}
    </>
  );
};

// USING CLASS
// class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { webformat, alt, largeImage } = this.props;
//     const { showModal } = this.state;
//     return (
//       <>
//         <ImageItem onClick={this.toggleModal}>
//           <Image src={webformat} alt={alt} width="350" loading="lazy" />
//         </ImageItem>
//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <ModalImage src={largeImage} alt={alt} loading="lazy" />
//           </Modal>
//         )}
//       </>
//     );
//   }
// }

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformat: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ pictures }) => {
  return (
    <ul className="ImageGallery">
      {pictures.map(({ webformatURL, argeImageURL, tags, id }) => (
        <ImageGalleryItem key={id} srcImg={webformatURL} tags={tags} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {};

export default ImageGallery;

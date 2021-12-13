import PropTypes from 'prop-types';

const ImageGalleryItem = ({ srcImg, tags, onClick }) => {
  return (
    <li onClick={onClick} className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={srcImg} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {};

export default ImageGalleryItem;

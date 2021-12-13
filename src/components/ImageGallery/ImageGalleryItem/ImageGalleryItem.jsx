import React from 'react';

const ImageGalleryItem = ({ srcImg, tags }) => {
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={srcImg} alt={tags} />
    </li>
  );
};
export default ImageGalleryItem;

import PropTypes from 'prop-types';
import { Image, Item } from './ImageGallery.styled';
import { useState } from 'react';
import { Modals } from "../Modal";

export function ImageGalleryItem({ img, tags, largeImg }) {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <Item onClick={() => setIsShowModal(true)}>
        <Image src={img} alt={tags} />
      </Item>
      {isShowModal && (
        <Modals
          img={largeImg}
          tags={tags}
          onClose={() => setIsShowModal(false)}
        ></Modals>
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
};
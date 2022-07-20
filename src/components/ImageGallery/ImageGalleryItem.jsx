import { useState } from 'react';
import PropTypes from 'prop-types';
import { Image, Item, InfoWrapper, Info, Comments } from './ImageGallery.styled';
import { Modals } from 'components/Modal';
import { AiOutlineLike, AiOutlineEye, AiOutlineComment, AiOutlineCloudDownload } from 'react-icons/ai';

export function ImageGalleryItem({ img, tags, largeImg, likes,
  views, comments, downloads }) {
  const [isShowModal, setIsShowModal] = useState(false);
 
    return (
        <Item onClick={() => setIsShowModal(true)}>
        <Image src={img} alt={tags} loading="lazy" />
        {isShowModal && <Modals img={largeImg} tags={tags} onClose={() => setIsShowModal(false)}>
        </Modals>}
        <InfoWrapper>
            <Info>
              <b>
                <AiOutlineLike size={24} color="#3f51b5" />
              </b>
              <Comments> {likes}</Comments>
            </Info>
          <Info>
            <b>
              <AiOutlineEye size={24} color="#3f51b5" />
            </b>
            <Comments>{views}</Comments>
          </Info>
          <Info>
            <b>
              <AiOutlineComment size={24} color="#3f51b5" />
            </b>
            <Comments>{comments}</Comments>
          </Info>
          <Info>
            <b>
              <AiOutlineCloudDownload size={24} color="#3f51b5" />
            </b>
            <Comments>{downloads}</Comments>
          </Info>
        </InfoWrapper>
      </Item>
    );
};

ImageGalleryItem.propTypes = {
    img: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImg: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
};
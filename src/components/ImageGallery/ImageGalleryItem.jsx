import PropTypes from 'prop-types';
import { Image, Item, InfoWrapper, Info, Comments } from './ImageGallery.styled';
import { AiOutlineLike, AiOutlineEye, AiOutlineComment, AiOutlineCloudDownload } from 'react-icons/ai';

export function ImageGalleryItem({ img, tags, id, largeImg, toggleModal, likes,
    views, comments, downloads}) {
 
    return (
        <Item key={`${id}`} onClick={() => toggleModal(largeImg, tags)}>
            <Image src={`${img}`} alt={`${tags}`} loading="lazy" />
            <InfoWrapper>
          <Info>
            <b>
              <AiOutlineLike size={24} color="#3f51b5" />
            </b>
            <Comments> {`${likes}`}</Comments>
          </Info>
          <Info>
            <b>
              <AiOutlineEye size={24} color="#3f51b5" />
            </b>
            <Comments>{`${views}`}</Comments>
          </Info>
          <Info>
            <b>
              <AiOutlineComment size={24} color="#3f51b5" />
            </b>
            <Comments>{`${comments}`}</Comments>
          </Info>
          <Info>
            <b>
              <AiOutlineCloudDownload size={24} color="#3f51b5" />
            </b>
            <Comments>{`${downloads}`}</Comments>
          </Info>
        </InfoWrapper>
        </Item>
    );
};

ImageGalleryItem.propTypes = {
    img: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    largeImg: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,
    likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
};
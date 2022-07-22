import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';
import { List } from './ImageGallery.styled';

export function ImageGallery({ data }) {
  return (
    <List>
      {data.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            img={webformatURL}
            largeImg={largeImageURL}
            tags={tags}
            key={id}
          />
        );
      })}
    </List>
  );
}

ImageGallery.propTypes = {
  data: PropTypes.array.isRequired,
};
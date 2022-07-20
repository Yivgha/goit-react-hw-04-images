import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';
import { List } from './ImageGallery.styled';

export function ImageGallery({ data}) {
    return (
        <List>
            {data.map(({ id, webformatURL, largeImageURL, tags, views, likes, comments, downloads }) => {
                return (
                    <ImageGalleryItem
                        img={webformatURL}
                        largeImg={largeImageURL}
                        tags={tags}
                        id={id}
                        key={`${id}`}
                        likes={likes}
                        views={views}
                        comments={comments}
                        downloads={downloads}
                    />
                )
            })}
        </List>
    )
};

ImageGallery.propTypes = {
    data: PropTypes.array.isRequired,
    toggleModal: PropTypes.func.isRequired,
};

import { useState, useEffect } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Container } from './App.styled';
import { Searchbar } from '../Searchbar';
import { ImageGallery } from '../ImageGallery';
import { ServiceAPI } from '../../service/Api';
import { Loader } from '../Loader';
// import { Modals } from '../Modal';
import { ButtonNext } from '../Button';
import { Notify } from 'notiflix';

const PER_PAGE = 12;

export function App() {
  const [text, setText] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [totalHits, setTotalHits] = useState('');
  // const [showModal, setShowModal] = useState(false);
  // const [modalImg, setModalImg] = useState('');
  // const [tags, setTags] = useState('');

  useEffect(() => {
    if (text === '') {
      return;
    }
    setLoader(true);

    ServiceAPI(text, page).then(data => {
      if (data.hits.length < 1) {
        Notify.error('Oops, we did not find anything');
      }
      if (data.totalHits !== 0 && data.hits.length !== 0) {
        Notify.success(`Hooray! We found ${data.totalHits} images.`);
      }
      setImages(state => [...state, ...data.hits]);
      setLoader(false);
      setTotalHits(data.totalHits);
    });
  }, [text, page]);

  useEffect(() => {
    setPage(1);
    setImages([]);
    setTotalHits(null);
  }, [text])

  const getNextPage = () => {
    setPage(state => state + 1);
  }
        
return (
      <Container>
        <Searchbar onSubmit={setText} />

        {images.length > 0 ? (
          <ImageGallery data={images} />
        ) : null}

        {loader && <Loader />}

        {totalHits > page * PER_PAGE && (
          <ButtonNext getNextPage={getNextPage} />
            )}
      </Container>
    );
  }
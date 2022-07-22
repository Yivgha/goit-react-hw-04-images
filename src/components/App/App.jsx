import { useState, useEffect } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Container } from './App.styled';
import { Searchbar } from '../Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { ServiceAPI } from '../../service/Api';
import { Loader } from '../Loader';
import { ButtonNext } from '../Button';

const PER_PAGE = 12;

export function App() {
  const [text, setText] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [totalHits, setTotalHits] = useState('');

  useEffect(() => {
    if (text === '') {
      return;
    }
    setLoader(true);

    ServiceAPI(text, page).then(data => {
      if (data.hits.length < 1) {
        alert('opps, ничего не найдено!');
      }

      setImages(state => [...state, ...data.hits]);
      setLoader(false);
      setTotalHits(data.totalHits);
    });
  }, [page, text]);

    useEffect(() => {
    setPage(1);
    setImages([]);
    setTotalHits(null);
  }, [text]);

  const getNextPage = () => {
    setPage(state => state + 1);
  };

  return (
    <Container>
      <Searchbar onSubmit={setText} />

      {images.length > 0 ? <ImageGallery data={images} /> : null}

      {loader && <Loader />}
      {totalHits > page * PER_PAGE && <ButtonNext getNextPage={getNextPage} />}
    </Container>
  );
}
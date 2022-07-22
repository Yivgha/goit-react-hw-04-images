import { useState } from 'react';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import {
  Header,
  SearchForm,
  SearchFormButton,
  InputSearch,
} from './Searchbar.styled';

export function Searchbar({ onSubmit }) {
  const [text, setText] = useState('');

  const onSubmitForm = e => {
    e.preventDefault();
    if (text.trim() === '') {
      alert('введите значение ');
      return;
    }
    onSubmit(text);
    setText('');
  };

  const handelInputChange = e => {
    const text = e.currentTarget.value.toLowerCase();
    setText(text);
  };

  return (
    <Header>
      <SearchForm onSubmit={onSubmitForm}>
        <SearchFormButton type="submit">
          <FcSearch />
        </SearchFormButton>

        <InputSearch
          type="text"
          placeholder="Search images and photos"
          value={text}
          onChange={handelInputChange}
        />
      </SearchForm>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
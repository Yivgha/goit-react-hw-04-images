import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  SearchForm,
  SearchFormButton,
  InputSearch,
} from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import { Notify } from 'notiflix';

export function Searchbar({ onSubmit }){
   const [text, setText] = useState('');

    const onSubmitForm = e => {
    e.preventDefault();
      if (text.trim() === '') {
            Notify.info('Write something');
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
                    <BsSearch />
                </SearchFormButton>
                <InputSearch type="text" placeholder="Search images and photos" value={text} onChange={handelInputChange} />
            </SearchForm>
        </Header>
  );
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
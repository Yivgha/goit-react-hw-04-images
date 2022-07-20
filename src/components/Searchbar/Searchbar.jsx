import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  SearchForm,
  SearchFormButton,
  InputSearch,
} from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import { Notify } from 'notiflix';

export class Searchbar extends PureComponent {
    state = { text: '' };

    onSubmitForm = e => {
        e.preventDefault();
        if (this.state.text.trim() === '') {
            Notify.info('Write something');
            return;
        }

        const onSubmit = this.props.onSubmit;

        const state = this.state;
        onSubmit(state);
        this.setState({ text: '' });
    };

      handelInputChange = e => {
    const text = e.currentTarget.value.toLowerCase();
    this.setState({ text });
    };
    
    render() {
        return (
            <Header>
                <SearchForm onSubmit={this.onSubmitForm}>
                    <SearchFormButton type="submit">
                        <BsSearch />
                    </SearchFormButton>
                    <InputSearch type="text" placeholder="Search images and photos" value={this.state.text} onChange={this.handelInputChange} />
                </SearchForm>
            </Header>
        );
    };
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
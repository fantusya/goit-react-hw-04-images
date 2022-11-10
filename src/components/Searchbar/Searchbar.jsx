import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Header,
  Form,
  Input,
  ButtonSearch,
  MdImageSearch,
} from './Searchbar.styled';

class SearchBar extends Component {
  state = {
    queryImg: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.queryImg.trim() === '') {
      alert('Введите имя img!');
      return;
    }

    this.props.onSubmit(this.state.queryImg);
    this.setState({ queryImg: '' });
  };

  handleChange = e => {
    this.setState({ queryImg: e.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Input
            onChange={this.handleChange}
            value={this.state.queryImg}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ButtonSearch type="submit">
            <MdImageSearch size={28} />
          </ButtonSearch>
        </Form>
      </Header>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

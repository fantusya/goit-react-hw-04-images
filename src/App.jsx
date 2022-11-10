import React, { Component } from 'react';
import { Box } from 'components/Box/Box';

import fetchImages from 'components/api';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Skeleton from 'components/Skeleton';
import ErrorMessage from 'components/ErrorMessage';
import IdleMessage from 'components/IdleMessage';
import Button from 'components/Button';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class App extends Component {
  state = {
    queryImg: '',
    searchedImgs: [],
    page: 1,
    total: 0,
    error: null,
    status: Status.IDLE,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevImg = prevState.queryImg;
    const nextImg = this.state.queryImg;

    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevImg !== nextImg || prevPage !== nextPage) {
      this.setState({
        status: Status.PENDING,
      });

      try {
        const images = await fetchImages(nextImg, this.state.page);
        this.setState(prevState => ({
          searchedImgs: [...prevState.searchedImgs, ...images.hits],
          total: images.total,
          status: Status.RESOLVED,
        }));
      } catch (error) {
        this.setState({ error, status: Status.REJECTED });
      }
    }
  }

  handleSubmit = queryImg => {
    this.setState({ queryImg, searchedImgs: [], page: 1, total: 0 });
  };

  handleMore = e => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { searchedImgs, status, total } = this.state;

    return (
      <Box minHeight="100%" display="flex" flexDirection="column">
        <Searchbar onSubmit={this.handleSubmit} />
        <Box flex="1 1 auto">
          <ImageGallery images={searchedImgs} />
          {status === 'idle' && <IdleMessage />}
          {status === 'pending' && <Skeleton />}
          {/* <Skeleton /> */}

          {status === 'rejected' && <ErrorMessage />}
        </Box>
        {searchedImgs &&
          status === 'resolved' &&
          searchedImgs.length < total && <Button onClick={this.handleMore} />}
      </Box>
    );
  }
}

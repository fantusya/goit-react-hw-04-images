// import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { Box } from 'components/Box/Box';
import { ToastContainer } from 'react-toastify';

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

const App = () => {
  const [queryImg, setQueryImg] = useState('');
  const [searchedImgs, setSearchedImgs] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!queryImg) return;

    async function getImages() {
      setStatus(Status.PENDING);

      try {
        const images = await fetchImages(queryImg, page);
        setSearchedImgs(prevState => [...prevState, ...images.hits]);
        setTotal(images.total);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
      }
    }

    getImages();
  }, [queryImg, page]);

  const handleSubmit = queryImg => {
    setQueryImg(queryImg);
    setSearchedImgs([]);
    setPage(1);
    setTotal(0);
  };

  return (
    <Box minHeight="100%" display="flex" flexDirection="column">
      <Searchbar onSubmit={handleSubmit} />
      <Box flex="1 1 auto">
        <ImageGallery images={searchedImgs} />
        {status === 'idle' && <IdleMessage />}
        {status === 'pending' && <Skeleton />}
        {status === 'rejected' && <ErrorMessage />}
      </Box>
      {searchedImgs && status === 'resolved' && searchedImgs.length < total && (
        <Button onClick={() => setPage(prevState => prevState + 1)} />
      )}
      <ToastContainer autoClose={3000} />
    </Box>
  );
};

// USING CLASS
// class App extends Component {
//   state = {
//     queryImg: '',
//     searchedImgs: [],
//     page: 1,
//     total: 0,
//     error: null,
//     status: Status.IDLE,
//   };

//   async componentDidUpdate(prevProps, prevState) {
//     const prevImg = prevState.queryImg;
//     const nextImg = this.state.queryImg;

//     const prevPage = prevState.page;
//     const nextPage = this.state.page;

//     if (prevImg !== nextImg || prevPage !== nextPage) {
//       this.setState({
//         status: Status.PENDING,
//       });

//       try {
//         const images = await fetchImages(nextImg, this.state.page);
//         this.setState(prevState => ({
//           searchedImgs: [...prevState.searchedImgs, ...images.hits],
//           total: images.total,
//           status: Status.RESOLVED,
//         }));
//       } catch (error) {
//         this.setState({ error, status: Status.REJECTED });
//       }
//     }
//   }

//   handleSubmit = queryImg => {
//     this.setState({ queryImg, searchedImgs: [], page: 1, total: 0 });
//   };

//   handleMore = e => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   render() {
//     const { searchedImgs, status, total } = this.state;

//     return (
//       <Box minHeight="100%" display="flex" flexDirection="column">
//         <Searchbar onSubmit={this.handleSubmit} />
//         <Box flex="1 1 auto">
//           <ImageGallery images={searchedImgs} />
//           {status === 'idle' && <IdleMessage />}
//           {status === 'pending' && <Skeleton />}
//           {status === 'rejected' && <ErrorMessage />}
//         </Box>
//         {searchedImgs &&
//           status === 'resolved' &&
//           searchedImgs.length < total && <Button onClick={this.handleMore} />}
//         <ToastContainer autoClose={3000} />
//       </Box>
//     );
//   }
// }

export default App;

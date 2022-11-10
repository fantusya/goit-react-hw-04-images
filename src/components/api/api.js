import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '30081101-40180903bea68f83c1da8999a';

const fetchImages = async (queryImg, page) => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: queryImg,
      page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });

  if (response.data.total === 0) {
    return Promise.reject(new Error(`Ooops! No images with ${queryImg}`));
  } else {
    const total = response.data.total;
    const hits = response.data.hits;
    return { total, hits };
  }
};

export default fetchImages;

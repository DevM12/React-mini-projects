import axios from 'axios';

const SearchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID QSNU8kQz5DOVBketi1gzmfSDUnUqgLxg4YMzE5EB1ok',
      },
      params: {
        query: term,
      },
    });
  
    return response.data.results;
  };
  
  export default SearchImages;
  
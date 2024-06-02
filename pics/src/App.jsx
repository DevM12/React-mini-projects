import { useState } from 'react'
import './App.css'
import SearchBar from './components/Searchbar'
import ImgList from './components/ImgList'
import SearchImages from './api'
function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await SearchImages(term);

    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImgList images={images} />
    </div>
  );
}

export default App

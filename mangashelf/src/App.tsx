import React, { useState } from 'react';
import './index.css';
import './App.css';
import MangaList from './components/manga-list/index';
import mangaListData from './data/index.json';
import SortDropdown from './components/dropdown';
import SortedMangaList from './components/sorted-manga-list';
import NavItems from './components/nav-items';
import FavouriteCards from './components/saved-list';

const App = () => {

  const [sortField, setSortField] = useState<string>("");

  const handleSortFieldData = (field: string) => {
    setSortField(field);
  };

  return (
    <>
    <FavouriteCards/>
      <NavItems sendData={handleSortFieldData}/>
      {sortField ? (
        <SortedMangaList sortField={sortField} mangaData={mangaListData} />
      ) : (
        <MangaList mangaData={mangaListData} />
      )}
    </>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/UI/Header';
import CharactersGrid from './components/Characters/CharactersGrid';
import './App.css';
import Search from './components/UI/Search';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const results = await axios(
        `https://breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(results.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharactersGrid items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;

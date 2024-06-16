import React, { useState } from 'react';
import { Button, Input } from 'reactstrap';
import axios from 'axios';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.example.com/games?q=${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching for games: ', error);
    }
  };

  return (
    <div>
      <Input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for games..."
      />
      <Button onClick={handleSearch}>Search</Button>
      <ul>
        {searchResults.map((game) => (
          <li key={game.id}>{game.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
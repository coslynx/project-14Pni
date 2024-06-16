import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameFilter = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    axios.get('api/games')
      .then(response => {
        setGames(response.data);
        setFilteredGames(response.data);
        const allGenres = response.data.map(game => game.genre);
        const uniqueGenres = [...new Set(allGenres)];
        setGenres(uniqueGenres);
      })
      .catch(error => {
        console.error('Error fetching games: ', error);
      });
  }, []);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    if (genre === 'All') {
      setFilteredGames(games);
    } else {
      const filtered = games.filter(game => game.genre === genre);
      setFilteredGames(filtered);
    }
  };

  return (
    <div>
      <h2>Filter Games</h2>
      <select value={selectedGenre} onChange={(e) => handleGenreChange(e.target.value)}>
        <option value="All">All Genres</option>
        {genres.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
      
      <ul>
        {filteredGames.map(game => (
          <li key={game.id}>
            <img src={game.thumbnail} alt={game.title} />
            <h3>{game.title}</h3>
            <p>{game.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameFilter;
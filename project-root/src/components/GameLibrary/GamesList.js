import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GamesList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('API_URL_HERE');
        setGames(response.data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="games-list">
      {games.map((game) => (
        <div key={game.id} className="game-thumbnail">
          <img src={game.thumbnailUrl} alt={game.title} />
          <h3>{game.title}</h3>
          <p>{game.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GamesList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContentManagement = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('https://api.example.com/games');
        setGames(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching games: ', error);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const handleDeleteGame = async (id) => {
    try {
      await axios.delete(`https://api.example.com/games/${id}`);
      setGames(games.filter(game => game.id !== id));
    } catch (error) {
      console.error('Error deleting game: ', error);
    }
  };

  const handleEditGame = async (id, updatedGame) => {
    try {
      await axios.put(`https://api.example.com/games/${id}`, updatedGame);
      setGames(games.map(game => (game.id === id ? { ...game, ...updatedGame } : game));
    } catch (error) {
      console.error('Error updating game: ', error);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading games...</p>
      ) : (
        <ul>
          {games.map(game => (
            <li key={game.id}>
              <span>{game.name}</span>
              <button onClick={() => handleDeleteGame(game.id)}>Delete</button>
              <button onClick={() => handleEditGame(game.id, { name: `${game.name} (Updated)` })}>Edit</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContentManagement;
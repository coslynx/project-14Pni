import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const LandingPage = () => {
  const [featuredGames, setFeaturedGames] = useState([]);

  useEffect(() => {
    const fetchFeaturedGames = async () => {
      try {
        const response = await axios.get('API_ENDPOINT_FOR_FEATURED_GAMES');
        setFeaturedGames(response.data);
      } catch (error) {
        console.error('Error fetching featured games: ', error);
      }
    };

    fetchFeaturedGames();
  }, []);

  return (
    <div>
      <h1>Welcome to the Arcade!</h1>
      <h2>Featured Games</h2>
      <div className="featured-games">
        {featuredGames.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.thumbnail} alt={game.title} />
            <h3>{game.title}</h3>
            <p>{game.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
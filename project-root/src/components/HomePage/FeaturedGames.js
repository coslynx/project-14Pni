import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeaturedGames = () => {
  const [featuredGames, setFeaturedGames] = useState([]);

  useEffect(() => {
    const fetchFeaturedGames = async () => {
      try {
        const response = await axios.get('https://api.example.com/featuredGames');
        setFeaturedGames(response.data);
      } catch (error) {
        console.error('Error fetching featured games: ', error);
      }
    };

    fetchFeaturedGames();
  }, []);

  return (
    <div className="featured-games">
      <h2>Featured Games</h2>
      <div className="game-list">
        {featuredGames.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.image} alt={game.title} />
            <h3>{game.title}</h3>
            <p>{game.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGames;
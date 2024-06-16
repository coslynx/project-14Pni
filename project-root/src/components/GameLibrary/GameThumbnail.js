import React from 'react';

const GameThumbnail = ({ game }) => {
  return (
    <div className="game-thumbnail">
      <img src={game.thumbnail} alt={game.title} />
      <h3>{game.title}</h3>
      <p>{game.description}</p>
    </div>
  );
};

export default GameThumbnail;
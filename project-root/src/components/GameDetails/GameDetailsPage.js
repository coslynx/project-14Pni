import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameDetailsPage = () => {
  const [gameDetails, setGameDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get('API_URL/gameDetails');
        setGameDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching game details: ', error);
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {gameDetails && (
        <div>
          <h1>{gameDetails.title}</h1>
          <p>{gameDetails.description}</p>
          <img src={gameDetails.image} alt={gameDetails.title} />
          <video controls>
            <source src={gameDetails.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div>
            {gameDetails.screenshots.map((screenshot, index) => (
              <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} />
            ))}
          </div>
          <div>
            {gameDetails.reviews.map((review, index) => (
              <div key={index}>
                <h3>{review.user}</h3>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
          <button>Play Now</button>
          <button>Download</button>
          <div>
            <button>Share on Facebook</button>
            <button>Share on Twitter</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameDetailsPage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://api.example.com/userdata');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h2>Welcome, {userData.username}!</h2>
          <p>Email: {userData.email}</p>
          <p>Games Played: {userData.gamesPlayed}</p>
          <p>Achievements Unlocked: {userData.achievements}</p>
          <p>Favorites: {userData.favorites.join(', ')}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default ProfilePage;
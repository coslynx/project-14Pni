import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [games, setGames] = useState([]);
  const [users, setUsers] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetchGames();
    fetchUsers();
    fetchContent();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await axios.get('api/games');
      setGames(response.data);
    } catch (error) {
      console.error('Error fetching games: ', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users: ', error);
    }
  };

  const fetchContent = async () => {
    try {
      const response = await axios.get('api/content');
      setContent(response.data);
    } catch (error) {
      console.error('Error fetching content: ', error);
    }
  };

  const addGame = async (newGame) => {
    try {
      const response = await axios.post('api/games', newGame);
      setGames([...games, response.data]);
    } catch (error) {
      console.error('Error adding game: ', error);
    }
  };

  const removeGame = async (id) => {
    try {
      await axios.delete(`api/games/${id}`);
      setGames(games.filter((game) => game.id !== id));
    } catch (error) {
      console.error('Error removing game: ', error);
    }
  };

  const updateUserRole = async (id, newRole) => {
    try {
      await axios.put(`api/users/${id}`, { role: newRole });
      setUsers(users.map((user) => (user.id === id ? { ...user, role: newRole } : user));
    } catch (error) {
      console.error('Error updating user role: ', error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Games</h2>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.title} - {game.genre}
            <button onClick={() => removeGame(game.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.role}
            <button onClick={() => updateUserRole(user.id, 'admin')}>Promote to Admin</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
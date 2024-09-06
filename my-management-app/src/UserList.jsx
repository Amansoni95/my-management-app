// src/components/UserList.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching the user data from JSONPlaceholder API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data); // Update users state
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching users');
        setLoading(false);
      });
  }, []);

  // Handle Delete User
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(() => {
          setUsers(users.filter(user => user.id !== id)); // Update the UI after deletion
          alert('User deleted successfully');
        })
        .catch(() => {
          alert('Error deleting user');
        });
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <Link to="/create-user">Create User</Link>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <span>{user.name} ({user.email}) - {user.phone}</span>
            <div>
              <Link to={`/edit-user/${user.id}`}>Edit</Link>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

/* eslint-disable no-unused-vars */
// src/components/EditUser.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({ name: '', email: '', phone: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setUser(response.data))
      .catch(() => alert('Error fetching user details'));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user)
      .then(() => {
        alert('User updated successfully');
        navigate('/');
      })
      .catch(() => alert('Error updating user'));
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} required />
        <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required />
        <input type="tel" value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} required />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default EditUser;

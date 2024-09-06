/* eslint-disable no-unused-vars */
// src/components/CreateUser.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./CreateUser.css";

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, phone };

    axios.post('https://jsonplaceholder.typicode.com/users', newUser)
      .then(() => {
        alert('User created successfully');
        navigate('/');
      })
      .catch(() => {
        alert('Error creating user');
      });
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateUser;

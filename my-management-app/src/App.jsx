// src/App.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './UserList';
import CreateUser from './CreateUser';
import EditUser from './EditUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

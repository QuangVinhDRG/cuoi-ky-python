import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Client from './pages/Client';
import ClientHome from './pages/client-home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Client/>} />
    </Routes>
  );
}

export default App;

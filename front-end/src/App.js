import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './Pages/loginPage/LoginPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <LoginPage /> } />
      {/* <Route path="/register" element={ "<Register />" } /> */}
    </Routes>
  );
}

export default App;

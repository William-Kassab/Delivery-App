import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './Pages/loginPage/LoginPage';
import RegisterPage from './Pages/registerPage/RegisterPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <LoginPage /> } />
      <Route path="/register" element={ <RegisterPage /> } />
      <Route path="/customer/products" element={ <p> Customer </p> } />
    </Routes>
  );
}

export default App;

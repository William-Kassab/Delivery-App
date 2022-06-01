import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import LoginPage from './Pages/loginPage/LoginPage';

function Routes() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <LoginPage /> } />
      {/* <Route path="/register" element={ "<Register />" } /> */}
    </Routes>
  );
}

export default Routes;

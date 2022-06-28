import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './Pages/loginPage/LoginPage';
import RegisterPage from './Pages/registerPage/RegisterPage';
import CustomerProducts from './Pages/customerProducts/CustomerProducts';
import CheckoutPage from './Pages/checkout/CheckoutPage';
import AdminManage from './Pages/adminManage/AdminManage';
import Order from './Pages/order/Order';
import DetailsOrder from './Pages/detailsOrder/DetailsOrder';
import SellerOrder from './Pages/sellerOrder/SellerOrder';
import DetailsSellerOrder from './Pages/detailsSellerOrder/DetailsSellerOrder';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <LoginPage /> } />
      <Route path="/register" element={ <RegisterPage /> } />
      <Route path="/customer/products" element={ <CustomerProducts /> } />
      <Route path="/customer/checkout" element={ <CheckoutPage /> } />
      <Route path="/customer/orders" element={ <Order /> } />
      <Route path="/customer/orders/:id" element={ <DetailsOrder /> } />
      <Route path="/seller/orders" element={ <SellerOrder /> } />
      <Route path="/seller/orders/:id" element={ <DetailsSellerOrder /> } />
      <Route path="/admin/manage" element={ <AdminManage /> } />
    </Routes>
  );
}

export default App;

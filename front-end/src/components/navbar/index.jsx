import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navBarStyle.css';
import userIcon from '../../images/userIcon.png';
import logout from '../../images/logout.svg';

const Navbar = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const { name } = JSON.parse(localStorage.getItem('user'));
    setUsername(name);
  }, []);

  return (
    <nav className="nav-container">
      <div className="items-container">
        <div className="userContainer">
          <img src={ userIcon } alt="user icon" />
          <span
            data-testid="customer_products__element-navbar-user-full-name"
            className="user"
          >
            {username}
          </span>
        </div>
        <span className="pipeline">|</span>
        <Link
          data-testid="customer_products__element-navbar-link-products"
          to="/customer/products"
          className="products"
        >
          Produtos
        </Link>
        <span className="pipeline">|</span>
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          to="/customer/orders"
          className="requests"
        >
          Meus Pedidos
        </Link>
      </div>
      <div className="logoutContainer">
        <Link
          data-testid="customer_products__element-navbar-link-logout"
          to="/login"
          className="logout"
          onClick={ () => localStorage.removeItem('user') }
        >
          <img src={ logout } alt="logout icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

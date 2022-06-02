import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const { name } = JSON.parse(localStorage.getItem('user'));
    setUsername(name);
  }, []);

  return (
    <nav>
      <div className="itemsContainer">
        <Link
          data-testid="customer_products__element-navbar-link-products"
          to="/customer/products"
          className="products"
        >
          Produtos
        </Link>
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          to="/customer/orders"
          className="requests"
        >
          Meus Pedidos
        </Link>
      </div>
      <div />
      <div className="logoutContainer">
        <p
          data-testid="customer_products__element-navbar-user-full-name"
          className="user"
        >
          {username}

        </p>
        <Link
          data-testid="customer_products__element-navbar-link-logout"
          to="/login"
          className="logout"
          onClick={ () => localStorage.removeItem('user') }
        >
          Sair
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navBarStyle.css';
import userIcon from '../../images/userIcon.png';
import logout from '../../images/logout.svg';
import MyContext from '../../context/MyContext';

const Navbar = () => {
  const { user } = useContext(MyContext);
  const { pathname } = useLocation();

  function renderNavBar() {
    if (pathname.includes('/customer')) {
      return (
        <>
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
        </>
      );
    }
    if (pathname.includes('/seller')) {
      return (
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          to="/seller/orders"
          className="requests"
        >
          Pedidos
        </Link>
      );
    }
    return (
      <Link
        data-testid="admin_manage__element-navbar"
        to="/admin/manage"
        className="requests"
      >
        Gerenciar Usuários
      </Link>
    );
  }

  return (
    <nav className="nav-container">
      <div className="items-container">
        <div className="userContainer">
          <img src={ userIcon } alt="user icon" />
          <span
            data-testid="customer_products__element-navbar-user-full-name"
            className="user"
          >
            {user.name}
          </span>
        </div>
        <span className="pipeline">|</span>
        { pathname && renderNavBar() }
        {/* <Link
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
        </Link> */}
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

import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';

function MyProviderContext({ children }) {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [price, setPrice] = useState('0,00');
  const [user, setUser] = useState('');

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const totalNumber = cart
      .reduce((acc, current) => acc + Number(current.price * current.quantity), 0)
      .toFixed(2);
    const totalString = String(totalNumber).replace(/\./, ',');
    setPrice(totalString);
  }, [cart]);

  useEffect(() => {
    if (user === '' && JSON.parse(localStorage.getItem('user'))) {
      const { name, id, token } = JSON.parse(localStorage.getItem('user'));
      setUser({ name, id, token });
    }
  }, []);

  const contextValue = {
    cart,
    setCart,
    price,
    setPrice,
    user,
    setUser,
  };

  return (
    <div>
      <MyContext.Provider value={ contextValue }>
        { children }
      </MyContext.Provider>
    </div>
  );
}

MyProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProviderContext;

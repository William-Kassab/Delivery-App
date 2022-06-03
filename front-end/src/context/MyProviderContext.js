import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';

function MyProviderContext({ children }) {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const contextValue = {
    cart,
    setCart,
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

import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext';

const Button = () => {
  const { cart } = useContext(MyContext);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const totalNumber = cart
      .reduce((acc, current) => acc + Number(current.price * current.quantity), 0)
      .toFixed(2);
    const totalString = String(totalNumber).replace(/\./, ',');
    setPrice(totalString);
  }, [cart]);

  return (
    <button
      className="cartBtn"
      type="button"
      data-testid="customer_products__button-cart"
      disabled={ price === '0,00' }
      onClick={ () => navigate('/customer/checkout') }
    >
      <span data-testid="customer_products__checkout-bottom-value">
        {`Ver Carrinho R$: ${price}`}
      </span>
    </button>
  );
};

export default Button;

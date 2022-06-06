import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext';

const Button = () => {
  const { price } = useContext(MyContext);
  const navigate = useNavigate();

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

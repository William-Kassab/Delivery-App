import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Button = ({ totalPrice }) => {
  const navigate = useNavigate();
  const price = totalPrice.toString().replace(/\./, ',');

  return (
    <button
      className="btn btn-h btn-lg btn-primary btn-block"
      type="button"
      data-testid="customer_products__button-cart"
      disabled={ price === '0,00' }
      onClick={ (() => navigate('/customer/checkout')) }
    >
      {`Ver Carrinho R$ : ${' '}`}
      <span data-testid="customer_products__checkout-bottom-value">
        {price}
      </span>
    </button>
  );
};

Button.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};

export default Button;

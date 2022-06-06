import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';

const CheckoutButton = () => {
  const { price } = useContext(MyContext);
  return (
    <button
      type="button"
      data-testid="customer_checkout__element-order-total-price"
    >
      {`Total: R$ ${price}`}
    </button>
  );
};

export default CheckoutButton;

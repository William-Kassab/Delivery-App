import React from 'react';
import PropTypes from 'prop-types';

const OrderPrice = ({ price }) => (
  <button
    type="button"
    data-testid="customer_order_details__element-order-total-price"
  >
    Total: R$
    {price.toString().replace('.', ',')}
  </button>
);

OrderPrice.propTypes = {
  price: PropTypes.number.isRequired,
};

export default OrderPrice;

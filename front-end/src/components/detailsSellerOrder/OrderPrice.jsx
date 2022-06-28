import React from 'react';
import PropTypes from 'prop-types';

const OrderPrice = ({ totalPrice }) => (
  <button
    type="button"
    data-testid="seller_order_details__element-order-total-price"
  >
    {totalPrice.replace(/\./, ',')}
  </button>
);

OrderPrice.propTypes = {
  totalPrice: PropTypes.string.isRequired,
};

export default OrderPrice;

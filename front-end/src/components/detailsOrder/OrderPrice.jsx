import React from 'react';
import PropTypes from 'prop-types';

const OrderPrice = ({ price }) => (
  <button
    type="button"
    data-testid="customer_order_details__element-order-total-price"
  >
    {`Total: R$ ${price}`}
  </button>
);

OrderPrice.propTypes = {
  price: PropTypes.string.isRequired,
};

export default OrderPrice;

import React from 'react';
import PropTypes from 'prop-types';

const OrderCard = ({ id, status, data, price }) => (
  <div>
    <div>
      <p>
        Pedido
      </p>
      <p data-testid={ `customer_orders__element-order-id-${id}` }>
        {`${id}`}
      </p>
    </div>
    <div>
      <p data-testid={ `customer_orders__element-delivery-status-${id}` }>{status}</p>
    </div>
    <p data-testid={ `customer_orders__element-order-date-${id}` }>{data}</p>
    <p data-testid={ `customer_orders__element-card-price-${id}` }>{price}</p>
  </div>
);

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,

};
export default OrderCard;

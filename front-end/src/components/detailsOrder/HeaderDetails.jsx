import React from 'react';
import PropTypes from 'prop-types';

const HeaderDetails = ({ id, sellerName, date, status }) => (
  <div>
    <p data-testid={ `customer_order_details-${id}` }>{`PEDIDO 000${id};`}</p>
    <p data-testid={ `customer_order_details__element-order-details-label${sellerName}` }>
      {`P. Vend: ${sellerName};`}
    </p>
    <p
      data-testid={ `customer_order_details__element-order-details-label-${date}` }
    >
      {date}
    </p>
    <p
      data-testid={
        `customer_order_details__element-order-details-label-delivery-${status}`
      }
    >
      {status}
    </p>
  </div>
);

HeaderDetails.propTypes = {
  id: PropTypes.number.isRequired,
  sellerName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default HeaderDetails;

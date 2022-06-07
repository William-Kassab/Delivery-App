import React from 'react';
import PropTypes from 'prop-types';

const OrderCard = ({ id, status, saleDate, price }) => {
  function formatDate() {
    const dateOnly = (saleDate.split('T')[0]);
    const replace = dateOnly.replace(/-/g, '/');
    const [year, month, day] = replace.split('/');
    const realDate = `${day}/${month}/${year}`;
    return realDate;
  }

  return (
    <div>
      <div>
        <p>
          Pedido
        </p>
        <p data-testid={ `customer_orders__element-order-id-${id}` }>
          {`000${id}`}
        </p>
      </div>
      <div>
        <p data-testid={ `customer_orders__element-delivery-status-${id}` }>{status}</p>
      </div>
      <p data-testid={ `customer_orders__element-order-date-${id}` }>{formatDate()}</p>
      <p
        data-testid={ `customer_orders__element-card-price-${id}` }
      >
        {`R$ ${price.replace(/\./, ',')}`}
      </p>
    </div>
  );
};

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default OrderCard;

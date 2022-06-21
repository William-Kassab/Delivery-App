import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const HeaderDetails = ({ headerInfo }) => {
  const { id, sellerName, date, status } = headerInfo;
  const [orderDate, setOrderDate] = useState('');

  useEffect(() => {
    const objDate = new Date(date);
    setOrderDate(objDate.toLocaleDateString('pt-BR'));
  }, []);

  return (
    <div>
      <p data-testid="customer_order_details__element-order-details-label-order-id">
        {`PEDIDO 000${id};`}
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        {`P. Vend: ${sellerName};`}
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        {orderDate}
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        {status}
      </p>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        disabled
      >
        Marcar como entregue
      </button>
    </div>
  );
};

HeaderDetails.propTypes = {
  headerInfo: PropTypes.shape({
    date: PropTypes.string,
    id: PropTypes.number,
    sellerName: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default HeaderDetails;

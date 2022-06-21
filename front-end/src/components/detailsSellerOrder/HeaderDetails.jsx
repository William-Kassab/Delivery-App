import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const HeaderDetails = ({ headerInfo }) => {
  const { saleId, status, saleDate } = headerInfo;
  const [saleStatus, setSaleStatus] = useState(status);

  useEffect(() => {

  }, [saleStatus]);

  function formatDate() {
    const dateOnly = (saleDate.split('T')[0]);
    const replace = dateOnly.replace(/-/g, '/');
    const [year, month, day] = replace.split('/');
    const realDate = `${day}/${month}/${year}`;
    return realDate;
  }

  function updateSaleStatus() {
    switch (saleStatus) {
    case 'Pendente':
      setSaleStatus('Preparando');
      break;
    case 'Preparando':
      setSaleStatus('Em Trânsito');
      break;
    default:
      break;
    }
  }

  return (
    <div>
      <span
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        {`PEDIDO 000${saleId}`}
      </span>
      <span
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        {formatDate()}
      </span>
      <span
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        {saleStatus}
      </span>
      <button
        type="button"
        data-testid="seller_order_details__button-preparing-check"
        onClick={ () => updateSaleStatus() }
        disabled={ saleStatus !== 'Pendente' }
      >
        PREPARAR PEDIDO
      </button>
      <button
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
        disabled={ saleStatus !== 'Preparando' }
        onClick={ () => updateSaleStatus() }
      >
        SAIU PARA ENTREGA
      </button>
    </div>
  );
};

HeaderDetails.propTypes = {
  headerInfo:
    PropTypes.shape({
      saleId: PropTypes.string.isRequired,
      saleDate: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }).isRequired,
};

export default HeaderDetails;

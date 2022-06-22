import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { updateSaleStatusById } from '../../service/api';
import MyContext from '../../context/MyContext';

const HeaderDetails = ({ headerInfo }) => {
  const { id, sellerName, date, status } = headerInfo;
  const [saleStatus, setSaleStatus] = useState(status);
  const [orderDate, setOrderDate] = useState('');
  const { user: { token } } = useContext(MyContext);

  useEffect(() => {
    const objDate = new Date(date);
    setOrderDate(objDate.toLocaleDateString('pt-BR'));
  }, []);

  async function updateSaleStatus() {
    await updateSaleStatusById(token, id, 'Em Trânsito');
    setSaleStatus('Entregue');
  }

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
        {saleStatus}
      </p>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        disabled={ saleStatus !== 'Em Trânsito' }
        onClick={ () => updateSaleStatus() }
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

import React from 'react';
import PropTypes from 'prop-types';

const OrderCard = ({ id, status, data, price }) => (
  <div>
    <p>
      Pedido
      {`${id}`}
    </p>
    <div>
      <p>{status}</p>
    </div>
    <p>{data}</p>
    <p>{price}</p>
  </div>
);

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,

};
export default OrderCard;

import React from 'react';
import PropTypes from 'prop-types';
import './sellerOrderStyle.css';
import { Link } from 'react-router-dom';

const SellerOrderCard = ({ id, status, saleDate, totalPrice, address }) => {
  function formatDate() {
    const dateOnly = (saleDate.split('T')[0]);
    const replace = dateOnly.replace(/-/g, '/');
    const [year, month, day] = replace.split('/');
    const realDate = `${day}/${month}/${year}`;
    return realDate;
  }

  function saleStatus() {
    if (status === 'Pendente') return 'status-pending';
    if (status === 'Preparando') return 'status-preparing';
    return 'status-delivered';
  }

  return (
    <Link to={ `/seller/orders/${id}` } className="order-card">
      <div className="card-infos">
        <p>
          Pedido
        </p>
        <p data-testid={ `seller_orders__element-order-id-${id}` }>
          {`000${id}`}
        </p>
      </div>
      <div>
        <p
          data-testid={ `seller_orders__element-delivery-status-${id}` }
          className={ saleStatus() }
        >
          {status}
        </p>
      </div>
      <div className="card-infos">
        <p
          data-testid={ `seller_orders__element-order-date-${id}` }
        >
          {formatDate()}
        </p>
        <p
          data-testid={ `seller_orders__element-card-price-${id}` }
        >
          {`R$ ${totalPrice.replace(/\./, ',')}`}
        </p>
        <p
          data-testid={ `seller_orders__element-card-address-${id}` }
        >
          { address }
        </p>
      </div>
    </Link>
  );
};

SellerOrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
};

export default SellerOrderCard;

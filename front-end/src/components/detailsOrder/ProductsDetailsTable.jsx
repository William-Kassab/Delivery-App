import React from 'react';
import PropTypes from 'prop-types';

const ProductsDetailsTable = ({ sale }) => (
  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Sub-total</th>
      </tr>
    </thead>
    <tbody>
      {sale.map(({ name, price, quantity }, i) => (
        <tr key={ i }>
          <td
            data-testid={
              `customer_checkout__element-order-table-item-number-${i}`
            }
          >
            {i + 1}
          </td>
          <td
            data-testid={
              `customer_order_details__element-order-table-item-number-${i}`
            }
          >
            {name}
          </td>
          <td
            data-testid={
              `customer_order_details__element-order-table-name-${i}`
            }
          >
            {quantity}
          </td>
          <td
            data-testid={ `customer_order_details__element-order-table-quantity-${i}` }
          >
            {`R$ ${price.replace(/\./, ',')}`}
          </td>
          <td
            data-testid={ `customer_order_details__element-order-table-sub-total-${i}` }
          >
            {`R$ ${(quantity * price).toFixed(2).replace(/\./, ',')}`}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

ProductsDetailsTable.propTypes = {
  sale: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
};

export default ProductsDetailsTable;

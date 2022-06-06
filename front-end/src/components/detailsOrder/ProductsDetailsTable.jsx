import React from 'react';
import PropTypes from 'prop-types';

const ProductsDetailsTable = ({ sale }) => (
  <table>
    <tr>
      <th>Item</th>
      <th>Descrição</th>
      <th>Quantidade</th>
      <th>Valor Unitário</th>
      <th>Sub-total</th>
    </tr>
    {sale.map(({ name, price, quantity }, index) => (
      <tr key={ index }>
        <td
          data-testid={
            `customer_checkout__element-order-table-item-number-${index}`
          }
        >
          {index + 1}

        </td>
        <td
          data-testid={
            `customer_order_details__element-order-table-item-number-${index}`
          }
        >
          {name}

        </td>
        <td
          data-testid={
            `customer_order_details__element-order-table-name-${index}`
          }
        >
          {quantity}

        </td>
        <td
          data-testid={ `customer_order_details__element-order-table-quantity-${index}` }
        >
          {`R$ ${price.replace(/\./, ',')}`}

        </td>
        <td
          data-testid={ `customer_order_details__element-order-table-sub-total-${index}` }
        >
          {`R$ ${(quantity * price).toFixed(2).replace(/\./, ',')}`}

        </td>
      </tr>
    ))}
  </table>
);

ProductsDetailsTable.propTypes = {
  sale: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
};

export default ProductsDetailsTable;

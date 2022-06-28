import React from 'react';
import PropTypes from 'prop-types';

const ProductsDetailsTable = ({ sales }) => (
  <table>
    <tr>
      <th>Item</th>
      <th>Descrição</th>
      <th>Quantidade</th>
      <th>Valor Unitário</th>
      <th>Sub-total</th>
    </tr>
    {sales.map(({ product_sales: { name, price }, quantity }, index) => (
      <tr key={ index }>
        <td
          data-testid={
            `seller_order_details__element-order-table-item-number-${index}`
          }
        >
          {index + 1}
        </td>
        <td
          data-testid={
            `seller_order_details__element-order-table-name-${index}`
          }
        >
          {name}
        </td>
        <td
          data-testid={
            `seller_order_details__element-order-table-quantity-${index}`
          }
        >
          {quantity}
        </td>
        <td
          data-testid={
            `seller_order_details__element-order-table-unit-price-${index}`
          }
        >
          {`R$ ${price.replace(/\./, ',')}`}
        </td>
        <td
          data-testid={ `seller_order_details__element-order-table-sub-total-${index}` }
        >
          {`R$ ${(quantity * price).toFixed(2).replace(/\./, ',')}`}
        </td>
      </tr>
    ))}
  </table>
);

ProductsDetailsTable.propTypes = {
  sales: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
};

export default ProductsDetailsTable;

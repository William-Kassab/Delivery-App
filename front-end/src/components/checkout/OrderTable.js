import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';

const OrderTable = () => {
  const { setCart, cart } = useContext(MyContext);

  const removeItem = (id) => {
    const filter = cart.filter((item) => item.id !== id);
    setCart(filter);
  };

  return (
    <table>
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Sub-total</th>
        <th>Remover Item</th>
      </tr>
      {cart.map(({ id, name, price, quantity }, index) => (
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
              `customer_checkout__element-order-table-name-${index}`
            }
          >
            {name}

          </td>
          <td
            data-testid={
              `customer_checkout__element-order-table-quantity-${index}`
            }
          >
            {quantity}

          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
          >
            {`R$ ${price.replace(/\./, ',')}`}

          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
          >
            {`R$ ${(quantity * price).toFixed(2).replace(/\./, ',')}`}

          </td>
          <td data-testid={ `customer_checkout__element-order-table-remove-${index}` }>
            <button
              type="button"
              onClick={ () => removeItem(id) }
            >
              Remover

            </button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default OrderTable;

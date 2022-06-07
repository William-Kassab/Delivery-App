import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import trash from '../../images/trash.svg';

const OrderTable = () => {
  const { setCart, cart, price } = useContext(MyContext);

  const removeItem = (id) => {
    const filter = cart.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(filter));
    console.log(cart);
    setCart(filter);
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead className="th-head">
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody className="tb-body">
          {cart.map((product, index) => (
            <tr key={ product.id }>
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
                {product.name}

              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-quantity-${index}`
                }
              >
                {product.quantity}

              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {`R$ ${product.price.replace(/\./, ',')}`}

              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {`R$ ${(product.quantity * product.price).toFixed(2).replace(/\./, ',')}`}

              </td>
              <td>
                <button
                  type="button"
                  className="remove-btn"
                  data-testid={
                    `customer_checkout__element-order-table-remove-${index}`
                  }
                  onClick={ () => removeItem(product.id) }
                >
                  <img src={ trash } alt="trash icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p
        className="totalPrice"
        data-testid="customer_checkout__element-order-total-price"
      >
        {`Total: R$ ${price}`}

      </p>
    </div>
  );
};

export default OrderTable;

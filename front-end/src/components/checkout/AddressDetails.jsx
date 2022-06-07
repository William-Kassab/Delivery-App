import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext';
import { createSale } from '../../service/api';

const AddressDetails = () => {
  const { cart, price, user } = useContext(MyContext);
  const [checkout, setCheckout] = useState({
    deliveryAddress: '',
    deliveryNumber: '',
    sellerId: 2,
  });
  const navigate = useNavigate();

  function handleChange({ target }) {
    const { name, value } = target;
    setCheckout({
      ...checkout,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const saleObj = {
      userId: user.id,
      sellerId: 2,
      totalPrice: price.replace(',', '.'),
      deliveryAddress: checkout.deliveryAddress,
      deliveryNumber: checkout.deliveryNumber,
      cart,
    };
    console.log(saleObj);
    const result = await createSale(saleObj, user.token);
    const orderId = result.data;
    navigate(`/customer/orders/${orderId}`);
  }

  return (
    <div className="address-container">
      Detalhes e Endereço para Entrega
      <form onSubmit={ handleSubmit } className="address-form">
        <label
          htmlFor="seller"
          className="address-label"
        >
          <p>P. Vendedora Responsável:</p>
          <select data-testid="customer_checkout__select-seller">
            <option>Fulana Pereira</option>
          </select>
        </label>
        <label
          htmlFor="deliveryAddress"
          className="address-label"
        >
          <p>Endereço:</p>
          <input
            type="text"
            data-testid="customer_checkout__input-address"
            name="deliveryAddress"
            value={ checkout.deliveryAddress }
            onChange={ handleChange }
          />
        </label>
        <label
          htmlFor="delieryNumber"
          className="address-label"
        >
          <p>Número:</p>
          <input
            type="text"
            data-testid="customer_checkout__input-addressNumber"
            name="deliveryNumber"
            value={ checkout.deliveryNumber }
            onChange={ handleChange }
          />
        </label>
        <button
          type="submit"
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar Pedido

        </button>
      </form>
    </div>);
};

export default AddressDetails;

import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext';
import { createSale } from '../../service/api';

const AddressDetails = () => {
  const { cart, price, user } = useContext(MyContext);
  const [checkout, setCheckout] = useState({
    deliveryAddress: '',
    deliveryNumber: '',
    sellerId: 2,
  });
  // const navigate = useNavigate();

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
      totalPrice: price,
      deliveryAddress: checkout.deliveryAddress,
      deliveryNumber: checkout.deliveryNumber,
      cart,
    };
    console.log(user.token);
    const result = await createSale(saleObj, user.token);
    console.log(result);
    const routeId = result.data.id;
    console.log(routeId);
  }

  return (
    <>
      Detalhes e Endereço para Entrega
      <form onSubmit={ handleSubmit }>
        <div>
          <p>P. Vendedora Responsável:</p>
          <select data-testid="customer_checkout__select-seller">
            <option>Fulana Pereira</option>
          </select>
        </div>
        <div>
          <p>Endereço:</p>
          <input
            type="text"
            data-testid="customer_checkout__input-address"
            name="deliveryAddress"
            value={ checkout.deliveryAddress }
            onChange={ handleChange }
          />
        </div>
        <div>
          <p>Número:</p>
          <input
            type="text"
            data-testid="customer_checkout__input-addressNumber"
            name="deliveryNumber"
            value={ checkout.deliveryNumber }
            onChange={ handleChange }
          />
        </div>
        <button
          type="submit"
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar Pedido

        </button>
      </form>
    </>);
};

export default AddressDetails;

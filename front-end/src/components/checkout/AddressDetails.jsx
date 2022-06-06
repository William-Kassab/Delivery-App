import React from 'react';

const AddressDetails = () => (
  <>
    Detalhes e Endereço para Entrega
    <div>
      <div>
        <p>P. Vendedora Responsável:</p>
        <select data-testid="customer_checkout__select-seller">
          <option>Fulana Pereira</option>
        </select>
      </div>
      <div>
        <p>Endereço:</p>
        <input type="text" data-testid="customer_checkout__input-address" />
      </div>
      <div>
        <p>Número:</p>
        <input type="text" data-testid="customer_checkout__input-addressNumber" />
      </div>
    </div>
    <button
      type="button"
      data-testid="customer_checkout__button-submit-order"
    >
      Finalizar Pedido

    </button>
  </>
);

export default AddressDetails;

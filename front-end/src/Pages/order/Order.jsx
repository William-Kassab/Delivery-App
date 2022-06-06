import React from 'react';
import OrderCard from '../../components/orders/OrderCard';

const ordersArray = [
  { id: 1, price: 30.56, date: '06/06/2022', status: 'pendente' },
  { id: 2, price: 50.56, date: '06/07/2022', status: 'preparando' },
  { id: 3, price: 70.56, date: '06/08/2022', status: 'entregue' },
];

const Order = () => (
  <section>
    {ordersArray.map(({ id, price, date, status }, index) => (<OrderCard
      id={ id }
      price={ price }
      date={ date }
      status={ status }
      key={ index }
    />))}
  </section>
);

export default Order;

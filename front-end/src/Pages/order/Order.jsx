import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import OrderCard from '../../components/orders/OrderCard';
import MyContext from '../../context/MyContext';
import { getSales } from '../../service/api';
import './orderStyle.css';

const Order = () => {
  const { user: { token } } = useContext(MyContext);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getSales(token);
      setSales(data);
      console.log(data);
    })();
  }, []);

  return (
    <>
      <Navbar />
      <section className="card-conainer">
        {
          sales.map(({ id, totalPrice, saleDate, status }, index) => (
            <OrderCard
              id={ id }
              totalPrice={ totalPrice }
              saleDate={ saleDate }
              status={ status }
              key={ index }
            />))
        }
      </section>
    </>
  );
};

export default Order;

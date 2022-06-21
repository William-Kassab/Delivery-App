import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import SellerOrderCard from '../../components/sellerOrder/SellerOrderCard';
import MyContext from '../../context/MyContext';
import { getSales } from '../../service/api';
import './sellerOrderStyle.css';

const SellerOrder = () => {
  const { user: { token } } = useContext(MyContext);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getSales(token);

      setSales(data);
    })();
  }, []);

  return (
    <>
      <Navbar />
      <section className="card-conainer">
        {
          sales.map((sale, index) => (
            <SellerOrderCard
              id={ sale.id }
              totalPrice={ sale.totalPrice }
              saleDate={ sale.saleDate }
              status={ sale.status }
              key={ index }
              address={ `${sale.deliveryAddress}, ${sale.deliveryNumber}` }
            />))
        }
      </section>
    </>
  );
};

export default SellerOrder;

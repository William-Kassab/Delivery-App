import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar';
import HeaderDetails from '../../components/detailsSellerOrder/HeaderDetails';
import OrderPrice from '../../components/detailsSellerOrder/OrderPrice';
import ProductsDetailsTable
from '../../components/detailsSellerOrder/ProductsDetailsTable';
import { getSaleDetails } from '../../service/api';

const DetailsSellerOrder = () => {
  const [sales, setSales] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const { data } = await getSaleDetails(token, id);
      setSales(data);
    })();
  }, [id]);

  function saleTable() {
    const { sale_products: saleProducts, saleId } = sales[0];
    const { totalPrice, saleDate, status } = saleProducts;
    const headerInfo = { saleId, saleDate, status };

    return (
      <section>
        <HeaderDetails headerInfo={ headerInfo } />
        <ProductsDetailsTable sales={ sales } />
        <OrderPrice totalPrice={ totalPrice } />
      </section>
    );
  }

  return (
    <>
      <Navbar />
      <h3>Detalhe do pedido</h3>
      {
        sales.length === 0
          ? (<p>Loading</p>)
          : saleTable()
      }
    </>
  );
};

export default DetailsSellerOrder;

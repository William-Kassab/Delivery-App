import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar';
import MyContext from '../../context/MyContext';
import { getSaleDetails } from '../../service/api';
import HeaderDetails from '../../components/detailsOrder/HeaderDetails';
import OrderPrice from '../../components/detailsOrder/OrderPrice';
import ProductsDetailsTable from '../../components/detailsOrder/ProductsDetailsTable';

const DetailsOrder = () => {
  const { user: { token } } = useContext(MyContext);
  const { id } = useParams();
  const [headerInfo, setHeaderInfo] = useState({});
  const [productsInfo, setProductsInfo] = useState([]);
  const [priceInfo, setPriceInfo] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await getSaleDetails(token, id);
      setHeaderInfo({
        id: data[0].saleId,
        sellerName: 'Fulana Pereira',
        date: data[0].sale_products.saleDate,
        status: data[0].sale_products.status,
      });
      const productsList = data
        .reduce((acc, { product_sales: { name, price }, quantity }) => {
          acc.push({ name, price, quantity });
          return acc;
        }, []);
      setProductsInfo(productsList);
      setPriceInfo(data[0].sale_products.totalPrice);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <Navbar />
      <h3>Detalhe do pedido</h3>
      { !loading && (
        <div>
          <HeaderDetails headerInfo={ headerInfo } />
          <ProductsDetailsTable sale={ productsInfo } />
          <OrderPrice price={ priceInfo } />
        </div>
      )}
    </>
  );
};

export default DetailsOrder;

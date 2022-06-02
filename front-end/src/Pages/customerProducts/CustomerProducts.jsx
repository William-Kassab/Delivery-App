import React, { useEffect, useState } from 'react';

import Navbar from '../../components/navbar';
import Products from '../../components/products';
import { getProducts } from '../../service/api';

const CustomerProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const { data } = await getProducts(token);
      setProducts(data);
    })();
  }, []);
  return (
    <>
      <Navbar />
      <Products products={ products } />
    </>
  );
};

export default CustomerProducts;

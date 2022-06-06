import React from 'react';
import HeaderDetails from '../../components/detailsOrder/HeaderDetails';
import OrderPrice from '../../components/detailsOrder/OrderPrice';
import ProductsDetailsTable from '../../components/detailsOrder/ProductsDetailsTable';

const DetailsOrder = () => (
  <>
    <h3>Detalhe do pedido</h3>
    <div>
      <HeaderDetails />
      <ProductsDetailsTable />
      <OrderPrice />
    </div>
  </>
);

export default DetailsOrder;

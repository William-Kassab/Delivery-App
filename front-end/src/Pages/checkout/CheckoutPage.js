import React from 'react';
import OrderTable from '../../components/checkout/OrderTable';
import Navbar from '../../components/navbar';

function CheckoutPage() {
  return (
    <>
      <Navbar />
      <div>
        <OrderTable />
      </div>
    </>
  );
}

export default CheckoutPage;

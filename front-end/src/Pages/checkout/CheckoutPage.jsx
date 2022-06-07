import React from 'react';
import AddressDetails from '../../components/checkout/AddressDetails';
import OrderTable from '../../components/checkout/OrderTable';
import Navbar from '../../components/navbar';
import './checkoutStyle.css';

function CheckoutPage() {
  return (
    <>
      <Navbar />
      <div>
        <OrderTable />
        <AddressDetails />
      </div>
    </>
  );
}

export default CheckoutPage;

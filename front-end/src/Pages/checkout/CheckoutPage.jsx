import React from 'react';
import AddressDetails from '../../components/checkout/AddressDetails';
import CheckoutButton from '../../components/checkout/CheckoutButton';
import OrderTable from '../../components/checkout/OrderTable';
import Navbar from '../../components/navbar';

function CheckoutPage() {
  return (
    <>
      <Navbar />
      <div>
        <OrderTable />
        <CheckoutButton />
        <AddressDetails />
      </div>
    </>
  );
}

export default CheckoutPage;

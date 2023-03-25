import React from 'react';
import CheckoutForm from './CheckoutForm';

const CheckoutContainer = () => {
  return (
    <div className="mb-6 flex w-full flex-col justify-around px-2">
      <h2 className=" mb-6 pb-2 text-center text-lg">Formulario de compra</h2>
      <CheckoutForm />
    </div>
  );
};

export default CheckoutContainer;

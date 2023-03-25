import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import CheckoutBrief from './CheckoutBrief';
import CheckoutForm from './CheckoutForm';
import { appRoutes } from '../../AppRoutes';
import { Link } from 'react-router-dom';
import CartList from '../CartContainer/CartList';

const CheckoutContainer = () => {
  const [orderId, setOrderId] = useState('');

  const cart = useCart();

  const handleOrderId = id => {
    setOrderId(id);
  };

  if (cart.items.length === 0) {
    return (
      <div className="mb-6 flex flex-col justify-around px-24">
        <h1 className="mb-6 pb-2 text-center text-lg">No items in cart!</h1>
        <Link
          className="inline-block rounded bg-purple-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-purple-800 hover:shadow-lg focus:bg-purple-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg"
          to={appRoutes.home}
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-6 mb-6 flex w-full flex-col justify-around bg-white lg:mx-24">
      <h1 className="mb-6 pb-2 text-center text-lg">Checkout</h1>
      {orderId === '' ? (
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-6/12 xl:w-4/12">
            <CheckoutForm handleOrderId={handleOrderId} />
          </div>
          <div className="lg:w-6/12 xl:w-8/12">
            <CartList />
          </div>
        </div>
      ) : (
        <CheckoutBrief orderId={orderId} />
      )}
    </div>
  );
};

export default CheckoutContainer;

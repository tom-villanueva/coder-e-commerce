import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { appRoutes } from '../../AppRoutes';
import CartList from './CartList';
import Swal from 'sweetalert2';

const CartContainer = () => {
  const cart = useCart();

  const handleEmptyCart = () => {
    Swal.fire({
      title: `Are you sure you want to empty cart?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then(result => {
      if (result.isConfirmed) {
        cart.clearItems();
        Swal.fire('Cart emptied', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Cart not emptied', '', 'info');
      }
    });
  };

  return (
    <div className="mx-5 block w-full rounded-lg bg-white shadow-lg md:mx-12">
      <div className="flex flex-wrap">
        <div className="mb-6 w-full pb-2">
          <h1 className="text-center text-xl font-bold">Shopping Cart</h1>
        </div>
        {cart.items.length > 0 ? (
          <div className="flex w-full flex-col items-center justify-between">
            <div className="mb-6 flex w-full flex-col items-center justify-center px-2">
              <h2 className=" mb-6 pb-2 text-lg ">Items</h2>
              <CartList inCart />
            </div>
            <div className="mb-6 flex w-full items-center justify-around px-2">
              <button
                className="inline-block rounded bg-purple-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-purple-800 hover:shadow-lg focus:bg-purple-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg"
                onClick={handleEmptyCart}
              >
                Empty Cart
              </button>
              <Link to={appRoutes.checkout} className="cursor-pointer">
                <button className="inline-block rounded bg-purple-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-purple-800 hover:shadow-lg focus:bg-purple-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg disabled:bg-slate-50 disabled:text-gray-500">
                  Go to Checkout
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="mb-6 w-full text-center">
            <p className="mb-6 pb-2 text-lg">
              You don't have any items in your cart
            </p>
            <Link to={appRoutes.home} className="cursor-pointer">
              <button className="inline-block rounded bg-purple-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-purple-800 hover:shadow-lg focus:bg-purple-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg">
                Explore Store
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartContainer;

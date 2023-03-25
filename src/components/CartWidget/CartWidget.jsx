import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import NavItem from '../Navbar/NavItem';
import { appRoutes } from '../../AppRoutes';
import { useCart } from '../../context/CartContext';

const CartWidget = () => {
  const cart = useCart();

  return (
    <NavItem path={appRoutes.cart}>
      <div className="relative p-3">
        <span className="absolute top-0 left-0 rounded-full bg-purple-400 px-1">
          {cart.getTotalItems()}
        </span>
        <ShoppingCartIcon className="h-6 w-6 text-indigo-600" />
      </div>
    </NavItem>
  );
};

export default CartWidget;

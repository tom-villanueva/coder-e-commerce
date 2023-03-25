import React from 'react';
import { useCart } from '../../context/CartContext';
import { TrashIcon } from '@heroicons/react/24/solid';

const CartList = () => {
  const cart = useCart();

  return (
    <>
      <ul className="w-full">
        {cart.items.map(item => (
          <li
            key={item.id}
            className="flex w-full items-center justify-around border-b-2 border-purple-400 border-opacity-100 py-4 dark:border-opacity-50"
          >
            <img className="h-16 w-16" src={item.img} />
            <p>{item.name}</p>
            <p>{` X ${item.quantity}`}</p>
            <p>{`$${item.price}`}</p>
            <button onClick={() => cart.deleteItem(item.id)}>
              <TrashIcon className="h-5 w-5 text-indigo-600" />
            </button>
          </li>
        ))}
      </ul>
      <div className="mb-6 mr-6 flex w-full justify-end font-bold md:mr-12">
        {`Total: $${cart.getTotalItemsPrice()}`}
      </div>
    </>
  );
};

export default CartList;

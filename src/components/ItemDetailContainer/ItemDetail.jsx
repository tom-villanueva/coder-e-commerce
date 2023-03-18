import React from 'react';
import { useCart } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product }) => {
  const cart = useCart();

  return (
    <div className="block rounded-lg bg-white shadow-lg">
      <div className="flex flex-wrap items-center">
        <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
          <img
            src={product.img}
            alt={`product-${product.name}`}
            className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
          />
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <h2 className="mb-6 pb-2 text-3xl font-bold">{product.name}</h2>
            <p className="mb-6 pb-2 text-gray-500">{product.description}</p>
            <p className="mb-6 pb-2 text-black">{`$${product.price}`}</p>
            <ItemCount
              stock={5}
              initial={cart.getItem().quantity}
              onAdd={count => console.log(count)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

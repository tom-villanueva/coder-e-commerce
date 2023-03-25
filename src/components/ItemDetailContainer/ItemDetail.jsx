import React from 'react';
import { useCart } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import Swal from 'sweetalert2';

const ItemDetail = ({ product }) => {
  const cart = useCart();

  const onAdd = count => {
    Swal.fire({
      title: `Are you sure you want to add ${product.name} x ${count} to cart?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then(result => {
      if (result.isConfirmed) {
        cart.addItem({
          ...product,
          quantity: count,
        });
        Swal.fire('Product added to cart!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Product not added to cart!', '', 'info');
      }
    });
  };

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
            <p className="mb-6 pb-2 text-black">{`Stock: ${product.stock}`}</p>
            <ItemCount
              stock={product.stock}
              initial={cart.getItem(product.id)?.quantity}
              onAdd={onAdd}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

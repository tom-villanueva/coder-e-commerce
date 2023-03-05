import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../products';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct(id).then(data => setProduct(data));
  }, [id]);

  return (
    <section className="mx-4 mt-4 text-center text-gray-800 md:text-left lg:mt-0">
      {product ? (
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
                <button
                  type="button"
                  className="inline-block rounded bg-purple-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-purple-800 hover:shadow-lg focus:bg-purple-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </section>
  );
};

export default ItemDetailContainer;

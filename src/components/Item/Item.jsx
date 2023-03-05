import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="flex justify-center text-center">
      <article className="block max-w-xs rounded-lg bg-indigo-500 shadow-lg">
        <Link to={`/item/${product.id}`}>
          <img
            className="rounded-t-lg"
            src={product.img}
            alt={`producto-image-${product.name}`}
          />
        </Link>
        <figcaption className="p-6">
          <h3 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {product.name}
          </h3>
          <p className="mb-4 text-base text-neutral-600 line-clamp-2 dark:text-neutral-200 md:line-clamp-4">
            {product.description}
          </p>
          <Link
            to={`/item/${product.id}`}
            type="button"
            className="inline-block rounded bg-purple-300 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-zinc-600 shadow-md shadow-purple-500 transition duration-150 ease-in-out hover:bg-purple-600 hover:text-zinc-100 hover:shadow-lg hover:shadow-purple-700 focus:bg-purple-600 focus:shadow-purple-700 focus:outline-none focus:ring-0 active:bg-purple-700 active:shadow-indigo-500"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Ver más
          </Link>
        </figcaption>
      </article>
    </div>
  );
};

export default Item;

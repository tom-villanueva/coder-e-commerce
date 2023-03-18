import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAddOne = () => {
    setCount(count => (count < stock ? count + 1 : count));
  };

  const handleSubstractOne = () => {
    setCount(count => (count > 1 ? count - 1 : count));
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div className="justify-left flex items-center">
      <button
        className="rounded bg-purple-500 py-3 px-5 text-sm font-medium hover:bg-purple-800"
        onClick={handleSubstractOne}
      >
        -
      </button>
      <div className="text-md mx-3">{count}</div>
      <button
        className="mr-3 rounded bg-purple-500 py-3 px-5 text-sm font-medium hover:bg-purple-800"
        onClick={handleAddOne}
      >
        +
      </button>
      <button
        className="inline-block rounded bg-purple-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-purple-800 hover:shadow-lg focus:bg-purple-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ItemCount;

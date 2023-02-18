import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-indigo-700">{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;

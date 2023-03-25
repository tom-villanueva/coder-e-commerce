import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return (
    <div className="mx-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map(product => {
        return <Item key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ItemList;

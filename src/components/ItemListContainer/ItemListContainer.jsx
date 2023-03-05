import React, { useState, useEffect } from 'react';
import HeroImage from '../HeroImage/HeroImage';
import { fetchProducts } from '../../products';
import ItemList from '../ItemList/ItemList';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    setProducts([]);
    fetchProducts(category).then(data => {
      setProducts(data);
      setGreeting(`Check out all our ${category ?? 'products'}!`);
    });
  }, [category]);

  return (
    <div className="w-full">
      {products.length > 0 ? (
        <>
          <HeroImage title={"Quester's Emporium"} greeting={greeting} />
          <ItemList products={products} />
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default ItemListContainer;

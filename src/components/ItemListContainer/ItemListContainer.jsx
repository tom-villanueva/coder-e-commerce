import React, { useState, useEffect } from 'react';
import HeroImage from '../HeroImage/HeroImage';
import { fetchProducts } from '../../products';
import ItemList from '../ItemList/ItemList';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { useParams } from 'react-router-dom';
import { db } from '../../firebaseConfig';

import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    setGreeting(`Check out all our ${category ?? 'products'}!`);
    const itemsCollection = collection(db, 'products');

    const consulta = category
      ? getDocs(query(itemsCollection, where('category', '==', category)))
      : getDocs(itemsCollection);

    consulta.then(res => {
      let products = res.docs.map(product => {
        return {
          ...product.data(),
          id: product.id,
        };
      });

      setProducts(products);
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

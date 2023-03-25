import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../products';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ItemDetail from './ItemDetail';
import { getDoc, collection, doc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const itemCollection = collection(db, 'products');
    const ref = doc(itemCollection, id);
    getDoc(ref).then(res => {
      setProduct({
        ...res.data(),
        id: res.id,
      });
    });
  }, [id]);

  return (
    <section className="mx-4 mt-4 text-center text-gray-800 md:text-left lg:mt-0 lg:w-3/4">
      {product ? <ItemDetail product={product} /> : <LoadingSpinner />}
    </section>
  );
};

export default ItemDetailContainer;

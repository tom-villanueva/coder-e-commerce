import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const itemExists = id => {
    return items.some(item => item.id === id);
  };

  const addItem = item => {
    const isInCart = itemExists(item.id);

    if (isInCart) {
      const filteredCartItems = items.filter(i => i.id !== item.id);

      setItems([
        ...filteredCartItems,
        {
          ...item,
          quantity: item.quantity,
        },
      ]);
    } else {
      setItems([...items, item]);
    }
  };

  const deleteItem = id => {
    setItems(items.filter(item => item.id !== id));
  };

  const clearItems = () => {
    setItems([]);
  };

  const getItem = id => {
    return items.find(item => item.id === id);
  };

  const getTotalItems = () => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getTotalItemsPrice = () => {
    return items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  let cart = {
    items,
    itemExists,
    addItem,
    deleteItem,
    clearItems,
    getItem,
    getTotalItems,
    getTotalItemsPrice,
  };

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartContextProvider;

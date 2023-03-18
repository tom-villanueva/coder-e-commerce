import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const itemExists = id => {
    return cart.some(item => item.id === id);
  };

  const addItem = item => {
    const isInCart = itemExists(item.id);

    if (isInCart) {
      const filteredCartItems = cart.filter(i => i.id === item.id);

      setCart([
        ...filteredCartItems,
        {
          ...item,
          quantity: item.quantity,
        },
      ]);
    } else {
      setCart([...cart, item]);
    }
  };

  const deleteItem = id => {
    setCart(cart.filter(item => item.id === id));
  };

  const clear = () => {
    setCart([]);
  };

  const getItem = id => {
    return cart.find(item => item.id === id);
  };

  const getTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  let data = {
    itemExists,
    addItem,
    deleteItem,
    clear,
    getItem,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartContextProvider;

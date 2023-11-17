// Create a context
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const updateCart = (newCart) => {
    setCart(newCart);
  }

  const getAllItem = () => {
    const totalCount = cart.reduce((sum, item) => sum + item.count, 0);
    return totalCount;
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCart, getAllItem }}>
      {children}
    </CartContext.Provider>
  );
  
};

export const useCart = () => {
  return useContext(CartContext);
};
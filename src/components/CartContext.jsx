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

  const getAllAmount = () => {
    console.log(cart);
    let totalAmount = 0;
    let grandTotal = 0;
    cart.map( (item) => {
      totalAmount = item.price * item.count;
      grandTotal += totalAmount;
    })
    return grandTotal;
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCart, getAllItem, getAllAmount}}>
      {children}
    </CartContext.Provider>
  );
  
};

export const useCart = () => {
  return useContext(CartContext);
};
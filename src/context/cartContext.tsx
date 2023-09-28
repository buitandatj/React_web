import React, { useState, createContext, useEffect } from 'react';
import { ICart } from '../type/ICart';
import { IProducts } from '../type/IProducts';


export const CartContext = createContext<ICart>({
  cart: [],
  setCart: function (value: React.SetStateAction<IProducts[]>): void {
    throw new Error();
  }
})
const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<IProducts[]>([]);
  useEffect(() => {
    const storeCart = localStorage.getItem('cart');
    if (storeCart) {
      const parsedCart = JSON.parse(storeCart);
      setCart(parsedCart);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>
};

export default CartProvider;

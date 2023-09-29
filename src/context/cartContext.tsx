import React, { useState, createContext, useEffect } from 'react';
import { ICart } from '../type/ICart';
import { IProducts } from '../type/IProducts';


export const CartContext = createContext<ICart>({
  cart: [],
  setCart: function (value: React.SetStateAction<IProducts[]>): void {
    throw new Error();
  },
  total: 0
})
const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<IProducts[]>([]);
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const total: number = cart.reduce((total, num) => {
      return total + num.price * num.mount
    }, 0)
    setTotal(total)
  }, [cart])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
  return <CartContext.Provider value={{ cart, setCart, total }}>{children}</CartContext.Provider>
};

export default CartProvider;

import React, { useState, createContext } from 'react';
import { ICart } from '../type/ICart';
import { IProducts } from '../type/IProducts';


export const CartContext = createContext<ICart>({
  cart: [],
  setCart: function (value: React.SetStateAction<IProducts[]>): void {
    throw new Error('Function not implemented.');
  }
})
const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<IProducts[]>([]);


  return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>
};

export default CartProvider;

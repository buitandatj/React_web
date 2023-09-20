import React, { useState, createContext } from 'react';
import { IState } from './productContext';

export interface ICart {
  cart: IState[];
  addToCart: (id: number | any, product: IState) => void;
  deleteItemCart: (id: number) => void;
}
export const CartContext = createContext<ICart>({
  cart: [],
  addToCart: function (id: number, product: IState): {} {
    throw new Error('Function not implemented.');
  },
  deleteItemCart: function (id: number): {} {
    throw new Error('Function not implemented.');
  }
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<IState[]>([]);

  const addToCart = (id: number, product: IState) => {
    const newProduct = { ...product, mount: 1 }
    const cartItem = cart.find((item) => {
      return item.id === id
    })
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, mount: cartItem.mount + 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newProduct])
    }
    alert('Thêm thành công')
  }
  const deleteItemCart = (id: number) => {
    const newCart: IState[] = cart.filter((item) => {
      return item.id !== id
    })
    setCart(newCart)
  }

  return <CartContext.Provider value={{ cart, addToCart, deleteItemCart }}>{children}</CartContext.Provider>
};

export default CartProvider;

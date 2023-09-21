import React, { useState, createContext } from 'react';
import { IState } from './productContext';
import { addCart } from '../constants/Message';

export interface ICart {
  cart: IState[];
  addToCart: (id: number | any, product: IState) => void;
  deleteItemCart: (id: number) => void;
  increaseMount: (id: number) => void;
  decreaseMount: (id: number) => void;
}
export const CartContext = createContext<ICart>({
  cart: [],
  addToCart: function (id: number, product: IState): {} {
    throw new Error('Function not implemented.');
  },
  deleteItemCart: function (id: number): {} {
    throw new Error('Function not implemented.');
  },
  increaseMount: function (id: number): void {
    throw new Error('Function not implemented.');
  },
  decreaseMount: function (id: number): void {
    throw new Error('Function not implemented.');
  }
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<IState[]>([]);

  const addToCart = (id: number, product: IState) => {
    addCart()
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

  }
  const deleteItemCart = (id: number) => {
    const newCart: IState[] = cart.filter((item) => {
      return item.id !== id
    })
    setCart(newCart)
  }
  const increaseMount = (id: number) => {
    const newItem: IState | any = cart.find(item => {
      return item.id === id
    })
    if (newItem) {
      const newCart = cart.map(item => {
        if (item.id === id) {
          return { ...item, mount: newItem.mount + 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    }
  }
  const decreaseMount = (id: number) => {
    const newItem: IState | any = cart.find(item => {
      return item.id === id
    })
    if (newItem) {
      const newCart = cart.map(item => {
        if (item.id === id) {
          return { ...item, mount: newItem.mount - 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    }
    if (newItem.mount < 2) {
      deleteItemCart(id)
    }
  }

  return <CartContext.Provider value={{ cart, addToCart, deleteItemCart, increaseMount, decreaseMount }}>{children}</CartContext.Provider>
};

export default CartProvider;

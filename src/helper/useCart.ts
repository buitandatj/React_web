import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/cartContext';
import { IProducts } from '../type/IProducts';
import { addCart, deleteCart } from '../constants/Message';

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  const AddToCart = (product: IProducts) => {
    const newProduct = { ...product, mount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === product.id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === product.id) {
          return { ...item, mount: cartItem.mount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newProduct]);
    }
    addCart();
  };
  const DeleteItemCart = (id: number) => {
    const newCart: IProducts[] = cart.filter((item) => {
      return item.id !== id;
    });
    deleteCart();
    setCart(newCart);
  };
  const Amount = (id: number, isMount: boolean) => {
    const newItemCart = cart.map((item) => {
      if (item.id === id) {
        if (isMount) {
          return { ...item, mount: item.mount + 1 };
        } else {
          if (item.mount === 1) {
            return item;
          }
          return { ...item, mount: item.mount - 1 };
        }
      }
      return item;
    });

    setCart(newItemCart);
  };
  return { AddToCart, DeleteItemCart, Amount };
};

export default useCart;

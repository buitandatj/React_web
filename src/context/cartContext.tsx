import React, { useState, createContext, useEffect } from 'react';
import { ICart } from '../type/ICart';
import { IProducts } from '../type/IProducts';
import { instanceUser } from '../api/Api';

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
    const userId = localStorage.getItem('userId');
    if (userId) {
      const fetchCart = async () => {
        try {
          const res = await instanceUser.get(`carts?userId=${userId}`)
          const carts = res.data
          setCart(carts)
        } catch (error) {
          console.log(error);
        }
      }
      fetchCart()
    }
  }, [])

  return <CartContext.Provider value={{ cart, setCart, total }}>{children}</CartContext.Provider>
};

export default CartProvider;

import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { ICartItem, IProducts } from '../type/IProducts';
import { addCart, deleteCart } from '../constants/Message';
import { instanceUser } from '../api/Api';

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);
  const AddToCart = async (product: IProducts, userId: number | undefined) => {
    const cartItem = cart?.find((item: ICartItem) => item.productId === product.id);
    if (cartItem) {
      const newCart: ICartItem[] = cart.map((item: ICartItem) => {
        if (item.productId === product.id) {
          return { ...item, mount: item.mount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
      try {
        const newCart = { ...product, mount: cartItem.mount + 1, userId, productId: product.id };
        await instanceUser.put(`carts/${cartItem.id}`, newCart);
      } catch (error) {
        console.error(error);
      }
      setCart(newCart);
    } else {
      const { id, ...p } = product;
      const newProduct: Partial<ICartItem> = {
        ...p,
        mount: 1,
        userId: userId + '',
        productId: product.id
      };
      try {
        const res = await instanceUser.post('carts', newProduct);
        setCart([...cart, res.data]);
      } catch (error) {
        console.error(error);
      }
    }

    addCart();
  };

  const DeleteItemCart = async (id: number, userId: number | undefined) => {
    try {
      await instanceUser.delete(`carts/${id}`);
      const updatedCart = cart.filter((item: { id: number }) => item.id !== id);
      setCart(updatedCart);
      deleteCart();
    } catch (error) {
      console.error(error);
    }
  };

  const Amount = async (id: number, isMount: boolean) => {
    const newItemCart = cart?.map((item: { id: number; mount: number }) => {
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

    const updateItem = newItemCart.find((item: { id: number }) => item.id === id);
    try {
      await instanceUser.put(`carts/${id}`, updateItem);
      setCart(newItemCart);
    } catch (error) {
      console.error(error);
    }
  };
  return { AddToCart, DeleteItemCart, Amount };
};

export default useCart;

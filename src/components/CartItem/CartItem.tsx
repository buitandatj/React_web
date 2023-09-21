import React, { useContext } from 'react';
import { FaDeleteLeft } from 'react-icons/fa6'
import { IState } from '../../context/productContext';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';


export const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};
const CartItem = ({ item }: { item: IState }) => {
    const { deleteItemCart, increaseMount, decreaseMount }: any = useContext(CartContext)
    // const { id, title, image, mount, price }: IState[] = item

    return (
        <div className='item-cart'>
            <div className='item-left'>
                <img src={item.image} alt={item.title} />
                <Link to={`/products/${item.id}`}><p>{item.title}</p></Link>
            </div>
            <div className='item-right'>

                <p>{formatPrice(item.price * item.mount)}</p>
                <div className='right-child'>
                    <div onClick={() => decreaseMount(item.id)}><button>-</button></div>
                    <div>{item.mount}</div>
                    <div onClick={() => increaseMount(item.id)}><button>+</button></div>
                </div>
            </div>
            <button className='delete-item' onClick={() => deleteItemCart(item.id)}><FaDeleteLeft /></button>
        </div>
    );
};

export default CartItem;
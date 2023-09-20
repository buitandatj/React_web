import React, { useContext } from 'react';
import { FaDeleteLeft } from 'react-icons/fa6'
import { IState } from '../../context/productContext';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';


const CartItem = ({ item }: IState[] | any) => {

    const { deleteItemCart }: any = useContext(CartContext)
    const { id, title, image, mount, price } = item
    return (
        <div className='item-cart'>
            <div className='item-left'>
                <img src={image} alt={title} />
                <Link to={`/products/${id}`}><p>{title}</p></Link>
            </div>
            <div className='item-right'>

                <p>{price}</p>
                <div className='right-child'>
                    <button>-</button>
                    <input type="text" min={1} value={mount} />
                    <button>+</button>
                </div>
            </div>
            <button className='delete-item' onClick={()=>deleteItemCart(id)}><FaDeleteLeft /></button>
        </div>
    );
};

export default CartItem;
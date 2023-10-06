import { FaDeleteLeft } from 'react-icons/fa6'
import { Link } from 'react-router-dom';
import { IProducts } from '../../type/IProducts';
import useCart from '../../helper/useCart';
import { userContext } from '../../context/userContext';
import { useContext } from 'react';
import formatPrice from '../../helper/usePrice';



const CartItem = ({ item, }: { item: IProducts }) => {
    const { currentUser } = useContext(userContext);
    const { id, title, image, price, mount } = item    
    const { DeleteItemCart, Amount } = useCart()
    return (
        <div className='item-cart'>
            <div className='item-left'>
                <img src={image} alt={title} />
                <Link to={`/products/${id}`}><p>{title}</p></Link>
            </div>
            <div className='item-right'>
                <p>{formatPrice(price * mount)}</p>

                <div className='right-child'>
                    <div onClick={() => { Amount(id, false) }}><button>-</button></div>
                    <div>{item.mount}</div>
                    <div onClick={() => { Amount(id, true) }}><button>+</button></div>
                </div>
            </div>
            <button className='delete-item' onClick={() => DeleteItemCart(id, currentUser?.id)}><FaDeleteLeft /></button>
        </div>
    );
};

export default CartItem;
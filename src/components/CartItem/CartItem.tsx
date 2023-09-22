import { FaDeleteLeft } from 'react-icons/fa6'
import { Link } from 'react-router-dom';
import { IProducts } from '../../type/IProducts';
import useCart from '../../helper/useCart';


export const formatPrice = (price: number) => {
    return price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};
const CartItem = ({ item, }: { item: IProducts }) => {
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
            <button className='delete-item' onClick={() => DeleteItemCart(id)}><FaDeleteLeft /></button>
        </div>
    );
};

export default CartItem;
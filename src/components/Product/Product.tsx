import { useContext } from 'react';
import { IState } from '../../context/productContext';
import './style.scss';
import { Link } from 'react-router-dom';
import { CartContext, ICart } from '../../context/cartContext';
import { formatPrice } from '../CartItem/CartItem';
import 'react-toastify/dist/ReactToastify.css';


const Product = ({ product }: { product: IState }) => {
   
    const { id, title, image, price } = product
    const { addToCart }: ICart = useContext(CartContext)
    return (
        <>
            <div key={id} className='product'>
                <div className='image-product'>
                    <Link to={`${id}`}>
                        <img src={image} alt="" />
                    </Link>
                </div>
                <div className='title-name'>
                    <Link to={`${id}`}>{title}</Link>
                </div>
                <div className='price'>
                    <p>{formatPrice(price)}</p>
                </div>
                <div className='add-cart'>
                    <button onClick={() => addToCart(id, product)}>Thêm vào giỏ</button>
                    <Link to={`${id}`}><button >Xem chi tiết</button></Link>
                </div>
              
            </div>
        </>


    );
};

export default Product;
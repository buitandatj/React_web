import { useContext } from 'react';
import { IState } from '../../context/productContext';
import './style.scss';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';


const Product = ({ product }: { product: IState }) => {
    const { id, title, image, price } = product
    const { addToCart }: any = useContext(CartContext)
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
                    <p>{price}đ</p>
                </div>
                <div className='add-cart'>
                    <button onClick={() => addToCart(product, id)}>Thêm vào giỏ</button>
                    <Link to={`${id}`}><button>Xem chi tiết</button></Link>
                </div>
            </div>
        </>


    );
};

export default Product;
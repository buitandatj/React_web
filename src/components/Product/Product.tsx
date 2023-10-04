import { Link } from 'react-router-dom';
import { formatPrice } from '../CartItem/CartItem';
import 'react-toastify/dist/ReactToastify.css';
import { IProducts } from '../../type/IProducts';
import useCart from '../../helper/useCart';
import { useContext } from 'react'
import LoadingProduct from '../../loading/LoadingProduct';
import { LoadingContextType, loadingContext } from '../../context/loadingContext';
import { userContext } from '../../context/userContext';

const Product = ({ product }: { product: IProducts }) => {
    const { loading } = useContext<LoadingContextType>(loadingContext)
    const { currentUser } = useContext(userContext);
    const { AddToCart } = useCart();
    const { id, title, image, price } = product
    const userId:number| undefined = currentUser?.id
    return (
        <>
            {
                loading ?
                    <LoadingProduct></LoadingProduct>
                    :
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
                            <button onClick={() => AddToCart(product, userId)}>Thêm vào giỏ</button>
                            <Link to={`${id}`}><button >Xem chi tiết</button></Link>
                        </div>
                    </div>
            }
        </>


    );
};

export default Product;
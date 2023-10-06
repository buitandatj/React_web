import React, { useContext } from 'react';
import { AiFillSecurityScan } from 'react-icons/ai';
import { FaTruck } from 'react-icons/fa';
import { ProductContext } from '../../context/productContext'
import { useNavigate, useParams } from 'react-router-dom';
import { IProducts } from '../../type/IProducts';
import useCart from '../../helper/useCart';
import { userContext } from '../../context/userContext';
import { requestLogin } from '../../constants/Message';
import formatPrice from '../../helper/usePrice';
const ProductDetail = () => {
    const navigate = useNavigate()
    const { AddToCart } = useCart()
    const { id } = useParams();
    const { products }: { products: IProducts[] } = useContext(ProductContext)
    const { currentUser, isLoggedIn } = useContext(userContext);
    const userId: number | undefined = currentUser?.id
    const productItem: IProducts | undefined | any = products.find((item: { id: number | undefined; }) => {
        return item.id === id
    })
    const handleAddCart = () => {
        if (isLoggedIn && currentUser) {
            AddToCart(productItem, userId)
        } else {
            requestLogin()
            navigate('/form');
        }
    }
    return (
        <div className='product-detail'>
            <div className='img-product'>
                <img src={productItem?.image} alt={productItem?.title} />
            </div>
            <div className='product-left'>
                <h2 className='title-product'>{productItem?.title}</h2>

                {
                    productItem ? (
                        <>
                            <div className='price-product'>{formatPrice(productItem?.price)}</div>
                            <div className='btn-add-cart' onClick={handleAddCart}>
                                <button>thêm vào giỏ</button>
                            </div>
                        </>
                    ) : null
                }
                <div className='info-product'>
                    <div>Thông tin sản phẩm</div>
                    <p>- {productItem?.descip}</p>
                </div>
                <div className='ship-product'>
                    <div className='title-ship'>
                        Dịch vụ giao hàng:
                    </div>
                    <div className='list-ship'>
                        <div className='list-child'>
                            <AiFillSecurityScan />
                            <p>Cam kết chính hãng</p>
                        </div>
                        <div className='list-child'>
                            <FaTruck />
                            <p>Thứ 2 - Thứ 7 từ 9h00 - 17h00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
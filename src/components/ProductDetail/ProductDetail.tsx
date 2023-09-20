import React, { useContext } from 'react';
import { AiFillSecurityScan } from 'react-icons/ai';
import { FaTruck } from 'react-icons/fa';
import { IState, ProductContext } from '../../context/productContext'
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const ProductDetail = () => {

    const { id } = useParams();
    const { products }: { products: IState[] } = useContext(ProductContext)
    const { addToCart }: any = useContext(CartContext)
    const productItem = products.find((item: { id: number | undefined; }) => {
        return item.id === id
    })
    return (
        <div className='product-detail'>
            <div className='img-product'>
                <img src={productItem?.image} alt={productItem?.title} />
            </div>
            <div className='product-left'>
                <h2 className='title-product'>{productItem?.title}</h2>
                <div className='price-product'>{productItem?.price}đ</div>
                <div className='btn-add-cart' onClick={() => addToCart(productItem, id)}>
                    <button>thêm vào giỏ</button>
                </div>
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
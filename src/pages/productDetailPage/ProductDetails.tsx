import React from 'react';
import './style.scss';
import { AiFillSecurityScan } from 'react-icons/ai';
import { FaTruck } from 'react-icons/fa';
const ProductDetails = () => {
    return (
        <div className='container-detail'>
            <div className='product-detail'>
                <div className='img-product'>
                    <img src="https://product.hstatic.net/1000281824/product/761aad3c99b244d59e7cd4d9fc215f6b_430c6bf91af3468fb8dbd8effa9b33e7.jpeg" alt="" />
                </div>
                <div className='product-left'>
                    <h2 className='title-product'>Áo thun đen</h2>
                    <div className='price-product'>2450000</div>
                    <div className='btn-add-cart'>
                        <button>thêm vào giỏ</button>
                    </div>
                    <div className='info-product'>
                        <div>Thông tin sản phẩm</div>
                        <p>- chất liệu cotton</p>
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
        </div>
    );
};

export default ProductDetails;
import React, { useContext } from 'react';
import { IProducts } from '../../../type/IProducts';
import { CartContext } from '../../../context/cartContext';
import CartItem from '../../../components/CartItem/CartItem';
import { Link } from 'react-router-dom';
import { alertCart } from '../../../constants/Message';
import formatPrice from '../../../helper/usePrice';

const CartTable = () => {
    const { cart }: { cart: IProducts[] } = useContext(CartContext);
    const { total }: { total: number } = useContext(CartContext);
    const handleCheckout = () => {
        if (cart.length === 0) {
            alertCart()
        }
    }
    return (
        <div className='container-cart'>
            <div className='cart'>
                <h4 className='title-cart'>Giỏ hàng của bạn</h4>
                <div>Có {cart?.length} sản phẩm</div>
                <div className='table-cart'>
                    {cart?.map((item: IProducts) => {
                        return (
                            <CartItem item={item} key={item.id} />
                        )
                    })}
                </div>
                <div className='note'>
                    <p>Ghi chú đơn hàng</p>
                    <textarea className="form-control" name="note" rows={6}></textarea>
                </div>
            </div>
            <div className='information'>
                <h4 className='title-cart'>Thông tin đơn hàng</h4>
                <hr />
                <div className='total'>
                    <p className='title-total'>Tổng tiền:</p>
                    <span className='price-total'>{formatPrice(total)}</span>
                </div>
                <hr />
                <div className='action'>
                    <li>Phí vận chuyển sẽ được tính ở trang thanh toán.</li>
                    <li>Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</li>
                </div>
                {cart.length === 0 ? (
                    <div className='btn-cart' onClick={handleCheckout}>
                        <button>THANH TOÁN</button>
                    </div>
                ) : (
                    <Link to='checkout' onClick={handleCheckout}>
                        <div className='btn-cart'>
                            <button>THANH TOÁN</button>
                        </div>
                    </Link>
                )}
                <div className='warning'>
                    <p className='warning-title'>Chính sách giao hàng</p>
                    <p>Hiện chúng tôi chỉ áp dụng thanh toán với đơn hàng có giá trị tối thiểu <span>250.000₫</span> trở lên.</p>
                </div>
            </div>
        </div>
    );
};

export default CartTable;
import React, { useContext, useEffect } from 'react';
import './style.scss';
import { CartContext } from '../../context/cartContext';
import { IState } from '../../context/productContext';
import CartItem from '../../components/CartItem/CartItem';
const Cart = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { cart }: any | IState[] = useContext(CartContext);
    return (
        <div className='container-cart'>
            <div className='cart'>
                <h4 className='title-cart'>Giỏ hàng của bạn</h4>
                <div>Có {cart.length} sản phẩm</div>
                <div className='table-cart'>
                    {cart.map((item: IState | any) => {
                        return (
                            <CartItem item={item} key={item.id} />
                        )
                    })}
                </div>
                <div className='note'>
                    <p>Ghi chú đơn hàng</p>
                    <textarea className="form-control" name="note" rows={5}></textarea>
                </div>
            </div>
            <div className='information'>
                <h4 className='title-cart'>Thông tin đơn hàng</h4>
                <hr />
                <div className='total'>
                    <p className='title-total'>Tổng tiền:</p>
                    <span className='price-total'>595000đ</span>
                </div>
                <hr />
                <div className='action'>
                    <li>Phí vận chuyển sẽ được tính ở trang thanh toán.</li>
                    <li>Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</li>
                </div>
                <div className='btn-cart'>
                    <button>THANH TOÁN</button>
                </div>
                <div className='warning'>
                    <p className='warning-title'>Chính sách giao hàng</p>
                    <p>Hiện chúng tôi chỉ áp dụng thanh toán với đơn hàng có giá trị tối thiểu <span>150.000₫</span> trở lên.</p>
                </div>
            </div>


        </div>
    );
};

export default Cart;
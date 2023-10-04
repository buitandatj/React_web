import React, { useContext, useEffect, useState } from 'react';
import { IProducts } from '../../../type/IProducts';
import { CartContext } from '../../../context/cartContext';
import { formatPrice } from '../../../components/CartItem/CartItem';
import axios from 'axios';

interface IProvinces {
    province_id: string,
    province_name: string,
}
interface IDistrict {
    district_id: string,
    district_name: string,
}
const Checkout = () => {
    const { cart }: { cart: IProducts[] } = useContext(CartContext);
    const { total }: { total: number } = useContext(CartContext);
    const [provinces, setProvinces] = useState<IProvinces[]>([])
    useEffect(() => {
        const apiGetProvinces = async () => {
            try {
                const res = await axios.get('https://vapi.vnappmob.com/api/province/');
                const data = res.data.results;
                setProvinces(data)
            } catch (error) {
                console.log(error);
            }
        };
        apiGetProvinces()
    }, [])

    return (
        <div className='form-container'>
            <div className="checkout-form">
                <h2>Thông tin thanh toán</h2>
                <form>
                    <label htmlFor="name">Họ và tên:</label>
                    <input type="text" id="name" />
                    <div className="contact-info">
                        <div className="email">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" />
                        </div>
                        <div className="phone">
                            <label htmlFor="phone">Số điện thoại:</label>
                            <input type="number" id="phone" />
                        </div>
                    </div>
                    <label htmlFor="address">Địa chỉ giao hàng:</label>
                    <textarea id="address" />
                    <div>
                        <select
                            id="city"
                        >
                            <option value="" selected>Chọn tỉnh thành</option>
                            {
                                provinces.map((item) => {
                                    return (
                                        <option key={item?.province_id}>{item?.province_name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <button type="submit">Hoàn tất đặt hàng</button>
                </form>
            </div>
            <div className='checkout-content'>
                <div>DEGREY VIETNAM</div>
                <div className='table-cart'>
                    {cart?.map((item: IProducts) => {
                        return (
                            <div className='form-items' key={item.id}>
                                <img className='form-img' src={item.image} alt={item.title} />
                                <div className='form-title'>{item.title} <p>({item.mount})</p></div>
                                <div className='form-price'>{formatPrice(item.price)}</div>
                            </div>
                        )
                    })}
                </div>
                <hr />
                <div className='total'>
                    <p className='title-total'>Tổng tiền:</p>
                    <span className='price-total'>{formatPrice(total)}</span>
                </div>
            </div>
        </div>
    );
};

export default Checkout;



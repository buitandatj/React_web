import React, { useContext, useEffect, useState } from 'react';
import { IProducts } from '../../../type/IProducts';
import { CartContext } from '../../../context/cartContext';
import { formatPrice } from '../../../components/CartItem/CartItem';
import axios from 'axios';
interface IProvince {
    code: string;
    name: string;
}
const Checkout = () => {
    const [provinces, setProvinces] = useState<IProvince[]>([])
    const [district, setDistrict] = useState<IProvince[]>([])
    const [select, setSelect] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://provinces.open-api.vn/api/");
                setProvinces(res.data);
                setDistrict(res.data.districts)
            } catch (error) {
                console.log(error)
            }
        };
        console.log(provinces);

        fetchData();
    }, []);
    const { cart }: { cart: IProducts[] } = useContext(CartContext);
    const { total }: { total: number } = useContext(CartContext);

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
                            value={select}
                            onChange={(e) => setSelect(e.target.value)}
                        >
                            <option value="" disabled>Chọn tỉnh thành</option>
                            {provinces.map((province) => (
                                <option key={province.code} value={province.name}>
                                    {province.name}
                                </option>
                            ))}
                        </select>

                        <select id="district">
                            <option value="" selected>Chọn quận huyện</option>
                        </select>

                        <select id="ward">
                            <option value="" selected>Chọn phường xã</option>
                        </select>
                    </div>
                    <button type="submit">Hoàn tất đặt hàng</button>
                </form>
            </div>
            <div className='checkout-content'>
                <div>DEGREY VIETNAM</div>
                <div className='table-cart'>
                    {cart.map((item: IProducts) => {
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
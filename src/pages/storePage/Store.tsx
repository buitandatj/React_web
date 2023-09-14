import React from 'react';
import './style.scss';
import { FaMapMarkerAlt } from 'react-icons/fa'
import ListPage from '../../components/listPage/ListPage';

const Store = () => {
    return (
        <div className='container-store '>
            <div className='heade-store'>
                <div>
                    <div className='left-store '>HỆ THỐNG CỬA HÀNG DEGREY </div>
                    <iframe className='video' width="868" height="500" src="https://www.youtube.com/embed/kQ_pyG0jatk" title="STORE DEGREY" ></iframe>
                </div>
                <ListPage />
            </div>
            <div className='address-store'>
                <p className='address'> <FaMapMarkerAlt />43 Huỳnh Văn Bánh P.17 Quận Phú Nhuận - SÀI GÒN</p>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6598.932228303694!2d106.67885742862045!3d10.794591218186346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d411c35277%3A0xcf96cde06627a938!2zRGVncmV5LnZuIC0gU8OgaSBHw7JuIC0gNDMgSHXhu7NuaCBWxINuIELDoW5oIFAuMTcgUS5QaMO6IE5odeG6rW4!5e0!3m2!1svi!2s!4v1694666208978!5m2!1svi!2s" width="800" height="550" loading="lazy" ></iframe>
                </div>
            </div>
            
            <div className='contact-store'>
                
                <p>Hotline: 0336311117</p>
                <ul>
                    <li><a href="https://www.facebook.com/degrey.saigon">https://www.facebook.com/degrey.saigon</a></li>
                    <hr />
                    <li><a href="https://www.instagram.com/degrey.saigon/"> https://www.instagram.com/degrey.saigon</a></li>
                    <hr />

                    <li><a href="https://www.tiktok.com/@degrey.vn"> https://www.tiktok.com/@degrey.vn</a></li>
                    <hr />

                    <li><a href="https://shopee.vn/degrey.vn">https://shopee.vn/degrey.vn</a></li>
                    <hr />

                </ul>
            </div>
        </div>
    );
};

export default Store;
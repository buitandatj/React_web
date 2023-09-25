import './style.scss';
import { FaMapMarkerAlt } from 'react-icons/fa'
import ListPage from '../../components/listPage/ListPage';
import { video, map, facebook, tiktok, insta, shoppe } from '../../constants/MediaLink';
import Iframe from 'react-iframe'
import { useEffect } from 'react';

const Store = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='container-store '>
            <div className='heade-store'>
                <div>
                    <div className='left-store '>HỆ THỐNG CỬA HÀNG DEGREY </div>
                    <Iframe className='video' width="868" height="500" url={video} title="STORE DEGREY" />
                </div>
                <ListPage />
            </div>
            <div className='address-store'>
                <p className='address'> <FaMapMarkerAlt />43 Huỳnh Văn Bánh P.17 Quận Phú Nhuận - SÀI GÒN</p>
                <div>
                    <Iframe url={map} width="800" height="550" loading="lazy" title="STORE DEGREY MAP" />
                </div>
            </div>

            <div className='contact-store'>

                <p>Hotline: 0336311117</p>
                <ul>
                    <li><a href={facebook}>https://www.facebook.com/degrey.saigon</a></li>
                    <hr />
                    <li><a href={insta}> https://www.instagram.com/degrey.saigon</a></li>
                    <hr />

                    <li><a href={tiktok}> https://www.tiktok.com/@degrey.vn</a></li>
                    <hr />

                    <li><a href={shoppe}>https://shopee.vn/degrey.vn</a></li>
                    <hr />

                </ul>
            </div>
        </div>
    );
};

export default Store;
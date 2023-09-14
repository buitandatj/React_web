import React from 'react';
import './style.scss';
import imgList from '../../assets/images/img_list_page.webp'

const ListPage = () => {
    return (
        <div className='right-heade'>
            <h5 className='right-title '>Danh mục Page</h5>
            <hr />
            <div className='right-menu'>SẢN PHẨM DEGREY</div>
            <hr />
            <div className='right-menu'>STORE | CỬA HÀNG</div>
            <hr />
            <div className='right-menu'>ABOUT | DEGREY</div>
            <hr />
            <div className='img-right'>
                <img height={300} width={250} src={imgList} alt="" />
            </div>
        </div>
    );
};

export default ListPage;
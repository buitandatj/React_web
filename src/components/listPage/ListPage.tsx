import React from 'react';
import imgList from '../../assets/images/img_list_page.webp';
import { Link } from 'react-router-dom';

const ListPage = () => {
    return (
        <div className='right-heade'>
            <h5 className='right-title '>Danh mục Page</h5>
            <hr />
            <Link to='/products'><div className='right-menu'>SẢN PHẨM DEGREY</div></Link>
            <hr />
            <Link to='/store'><div className='right-menu'>STORE | CỬA HÀNG</div></Link>
            <hr />
            <Link to='/intro'><div className='right-menu'>ABOUT | DEGREY</div></Link>
            <hr />
            <div className='img-right'>
                <img height={300} width={250} src={imgList} alt="" />
            </div>
        </div>
    );
};

export default ListPage;
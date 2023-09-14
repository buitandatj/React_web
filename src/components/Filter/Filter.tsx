import React from 'react';
import './style.scss';
import Search from '../Search/Search';
import { FaAnglesDown } from "react-icons/fa6";
const Filter = () => {
    return (
        <div className='filter'>
            <div className='title'>
                <h1>Tất cả sản phẩm</h1>
                <Search />
                <div className='toggle-filter'>
                    Sắp xếp
                    <FaAnglesDown className='icon-toggle' />
                    <div className='list-arrange'>
                        <div>Giá tăng dần</div>
                        <div>Giá giảm dần</div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Filter;
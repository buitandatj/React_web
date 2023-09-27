import React, { useContext } from 'react';
import Search from '../Search/Search';
import { FaAnglesDown } from "react-icons/fa6";
import { ProductContext } from '../../context/productContext';
import { IProducts } from '../../type/IProducts';
const Filter = () => {
    const { products, setProducts } = useContext(ProductContext)
    const handleSortChange = (e: React.MouseEvent<HTMLDivElement> | { target: string | any }) => {
        const selectedSort: string = e.target.textContent;
        const sortProducts: IProducts[] = [...products];
        if (selectedSort === 'Giá tăng dần') {
            sortProducts.sort((a, b) => a.price - b.price);
        } else if (selectedSort === 'Giá giảm dần') {
            sortProducts.sort((a, b) => b.price - a.price);
        }
        setProducts(sortProducts);
    }
    return (
        <div className='filter'>
            <div className='title'>
                <h1>Tất cả sản phẩm</h1>
                <Search />
                <div className='toggle-filter' onClick={handleSortChange}>
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
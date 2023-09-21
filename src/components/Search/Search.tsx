import React, { useContext, useEffect, useState } from 'react';
import './style.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { IState, ProductContext } from '../../context/productContext';

const Search = () => {
    const { products }: { products: IState[] } = useContext(ProductContext)
    const { setProducts } = useContext(ProductContext)
    const [search, setSearch] = useState('')

    const onSearch = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearch(e.target.value)
    }

    return (
        <div className='seach-header'>
            <div className='search'>
                <div className='input'>
                    <input
                        value={search}
                        onChange={onSearch}
                        type="text"
                        placeholder='Tìm kiếm sản phẩm'
                    />
                </div>
                <div className='btn-search'>
                    <AiOutlineSearch className='icon-search' />
                </div>
            </div>

        </div>
    );
};

export default Search;
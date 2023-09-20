import React, { useContext, useEffect, useState } from 'react';
import './style.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { IState, ProductContext } from '../../context/productContext';

const Search = () => {
    const { products }: { products: IState[] } = useContext(ProductContext)
    // const { setProducts } = useContext(ProductContext)
    const [search, setSearch] = useState('')

    useEffect(()=>{
        
    },[search])
    const onSearch = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearch(e.target.value)        
    }

    return (
        <div className='seach-header'>
            <div className='search'>
                <div className='input'>
                    <input
                        onChange={onSearch}
                        value={search}
                        type="text"
                        placeholder='Tìm kiếm sản phẩm' />
                </div>
                <div className='btn-search'>
                    <AiOutlineSearch className='icon-search' />
                </div>
            </div>

        </div>
    );
};

export default Search;
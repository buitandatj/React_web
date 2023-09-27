import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';

const Search = () => {

    const [search, setSearch] = useState('')
    const [searchParams, setSearchsParams] = useSearchParams();
    const query = searchParams.get('q')
    const onSearch = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearch(e.target.value)
    }
    useEffect(() => {
        setSearch(query || "")
    }, [query])
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        searchParams.set("q", search);
        setSearchsParams(searchParams)
        
    }
    return (
        <div className='seach-header '>
            <div className='search'>
                <form className='input' onSubmit={handleSubmit}>
                    <input
                        value={search}
                        onChange={onSearch}
                        type="text"
                        placeholder='Tìm kiếm sản phẩm'
                    />
                </form>
                <button type='submit'
                    className='btn-search'
                    onClick={handleSubmit}>
                    <AiOutlineSearch className='icon-search' />
                </button>
            </div>

        </div>
    );
};

export default Search;
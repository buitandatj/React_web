import React, { useContext, useEffect, useMemo, useState } from 'react';
import Filter from '../../components/Filter/Filter';
import Product from '../../components/Product/Product';
import { ProductContext } from '../../context/productContext';
import ReactPaginate from 'react-paginate';
import { useSearchParams } from 'react-router-dom';
import { IProducts } from '../../type/IProducts';

const productsPage = 15;
const Products = () => {
    const { products }: { products: IProducts[] } = useContext(ProductContext);
    const [productSearch, setProductSearch] = useState<IProducts[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('q');
    const currentPage = searchParams.get('p') ? parseInt(searchParams.get('p') as string) : 0
    const pages = currentPage * productsPage;
    const pageCount = Math.ceil(productSearch.length / productsPage);
    useEffect(() => {
        let result = products;
        if (query) {
            result = products.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
        }
        setProductSearch(result);
    }, [products, query]);
    const handlePageChange = ({ selected }: { selected: number }) => {
        searchParams.set('p', selected + '');
        setSearchParams(searchParams);
        window.scrollTo(0, 450);
    };
    const data = useMemo(() => {
        const result = productSearch.slice(pages, pages + productsPage);
        return result;
    }, [productSearch, pages]);

    return (
        <div>
            <div className='banner'></div>
            <Filter />
            <div className='products'>
                {data.map((product: IProducts) => {
                    return <Product key={product.id} product={product} />;
                })}
            </div>
            <ReactPaginate
                nextLabel=">"
                previousLabel="<"
                onPageChange={handlePageChange}
                initialPage={currentPage}
                pageRangeDisplayed={pageCount}
                pageCount={pageCount}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                activeClassName="active"
                className='reace-paginate'
            />
        </div>
    );
};

export default Products;
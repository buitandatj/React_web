import React, { useContext, useEffect, useMemo } from 'react';
import Banner from '../../components/Banner/Banner';
import './style.scss'
import Filter from '../../components/Filter/Filter';
import Product from '../../components/Product/Product';
import { ProductContext } from '../../context/productContext';
import ReactPaginate from 'react-paginate';
import { useSearchParams } from 'react-router-dom';
import { IProducts } from '../../type/IProducts';

const productsPage = 10;
const Products = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { products }: { products: IProducts[] } = useContext(ProductContext)
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('q')
    const currentPage = searchParams.get('p') ? parseInt(searchParams.get('p') as string) : 1
    const pages = currentPage * productsPage;
    const pageCount = Math.ceil(products.length / productsPage);
    const handlePageChange = ({ selected }: { selected: number }) => {
        searchParams.set("p", selected + "")
        setSearchParams(searchParams)
        window.scrollTo(0, 450)
    };
    const data = useMemo(() => {
        let result = products;
        if (query) {
            result = products.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
        }
        result = result.slice(pages, pages + productsPage)
        return result
    }, [products, query, pages])

    return (
        <div>
            <Banner />
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
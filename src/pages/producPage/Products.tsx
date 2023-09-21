import React, { useContext, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import './style.scss'
import Filter from '../../components/Filter/Filter';
import Product from '../../components/Product/Product';
import { IState, ProductContext } from '../../context/productContext';
import ReactPaginate from 'react-paginate';


const Products = () => {
    const { products }: { products: IState[] } = useContext(ProductContext)
    const [currentPage, setCurrentPage] = useState(0);
    const productsPage = 10;
    const pages = currentPage * productsPage;

    const handlePageChange = ({ selected }: { selected: number }) => {
        setCurrentPage(selected);
        window.scrollTo(0, 0)
    };
    return (
        <div>

            <Banner />
            <Filter />
            <div className='products'>
                {products?.slice(pages, pages + productsPage)
                    .map((product: IState) => {
                        return <Product key={product.id} product={product} />;
                    })}
            </div>
            <ReactPaginate
                nextLabel=">"
                previousLabel="<"
                onPageChange={handlePageChange}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={3}
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
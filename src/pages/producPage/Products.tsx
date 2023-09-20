import React, { useContext } from 'react';
import Banner from '../../components/Banner/Banner';
import './style.scss'
import Filter from '../../components/Filter/Filter';
import Product from '../../components/Product/Product';
import { IState, ProductContext } from '../../context/productContext'

const Products = () => {

    const { products }: { products: IState[] } = useContext(ProductContext)
    return (
        <div>

            <Banner />
            <Filter />
            <div className='products'>
                {
                    products?.map((product: IState) => {
                        return (
                            <Product key={product.id} product={product} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Products;
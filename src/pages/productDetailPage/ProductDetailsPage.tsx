import React, { useContext, useEffect } from 'react';
import './style.scss';
import ProductDetails from '../../components/ProductDetail/ProductDetail'
import { IState, ProductContext } from '../../context/productContext';


const ProductDetailsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { products }: { products: IState[] } = useContext(ProductContext)

    return (
        <div className='container-detail'>
            <ProductDetails  />
        </div>
    );
};

export default ProductDetailsPage;
import React, { useEffect } from 'react';
import ProductDetails from '../../components/ProductDetail/ProductDetail'

const ProductDetailsPage = () => {
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])
    return (
        <div className='container-detail'>
            <ProductDetails />
        </div>
    );
};

export default ProductDetailsPage;
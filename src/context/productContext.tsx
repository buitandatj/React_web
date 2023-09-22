import React, { useState, useEffect, createContext } from 'react';
import { myAxios } from '../api/Api';
import { IProducts } from '../type/IProducts';
interface IProduct {
  products: IProducts[];
}
export const ProductContext = createContext<IProduct>({ products: [] });

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<IProducts[]>([]);



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await myAxios('products', 'GET');
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>
};

export default ProductProvider;

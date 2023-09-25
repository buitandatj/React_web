import React, { useState, useEffect, createContext } from 'react';
import { myAxios } from '../api/Api';
import { IProducts } from '../type/IProducts';
interface IProduct {
  products: IProducts[];
  setProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
}
export const ProductContext = createContext<IProduct>({
  products: [],
  setProducts: function (): {} {
    throw new Error('Function not implemented.');
  }
});

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
  return <ProductContext.Provider value={{ products, setProducts }}>{children}</ProductContext.Provider>
};

export default ProductProvider;

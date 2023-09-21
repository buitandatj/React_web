import React, { useState, useEffect, createContext } from 'react';
import { myAxios } from '../api/Api';



export interface IState {
  id: number;
  title: string;
  descip: string;
  image: string;
  price: number;
  mount: number;
}

interface IProduct {
  products: IState[];
  setProducts: any;
}
export const ProductContext = createContext<IProduct>({ products: [], setProducts: [] });

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<IState[]>([]);



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

import React, { useState, useEffect, createContext, useContext } from 'react';
import { myAxios } from '../api/Api';
import { IProducts } from '../type/IProducts';
import { LoadingContextType, loadingContext } from './loadingContext';
interface IProduct {
  products: IProducts[];
  setProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
}
export const ProductContext = createContext<IProduct>({
  products: [],
  setProducts: function (): {} {
    throw new Error();
  },
});

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const {setLoading } = useContext<LoadingContextType>(loadingContext);


  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const response = await myAxios('products', 'GET');
        setProducts(response);
      } catch (error) {
        console.log(error)
      }
      setLoading(false)

    };
    fetchProducts();
  }, [setLoading]);
  return <ProductContext.Provider value={{ products, setProducts }}>{children}</ProductContext.Provider>
};

export default ProductProvider;

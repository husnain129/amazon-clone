/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from 'react';
import { Product } from '../types/product';

type ProductContextType = {
  product: Product.Root[];
  setProduct: (product: Product.Root[]) => void;
  getOneProduct: (productId: number) => Product.Root | undefined;
};

const ProductContext = createContext({} as ProductContextType);

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [product, setProduct] = useState<Product.Root[]>([] as Product.Root[]);

  const getOneProduct = (productId: number) => {
    return product.find((product) => product.id === productId);
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        getOneProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => {
  return useContext(ProductContext);
};

export { ProductProvider, useProduct };

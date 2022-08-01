/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from 'react';
import { storage } from '../utils/loca-storage';

export type CartProductType = { id: number; count: number };
type CartContextType = {
  cart: CartProductType[];
  setCart: (cart: CartProductType[]) => void;
  setCartItem: ({ data }: { data: CartProductType }) => void;
  deleteCartItem: ({ id }: { id: number }) => void;
  updateCartItem: ({ action, id }: { action: 'INC' | 'DEC'; id: number }) => void;
};

const CartContext = createContext({} as CartContextType);
const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartProductType[]>(
    storage().get({ name: 'cart' }) || []
  );

  const setCartItem = ({ data }: { data: CartProductType }) => {
    setCart(storage().set({ name: 'cart', data }));
  };
  const deleteCartItem = ({ id }: { id: number }) => {
    setCart(storage().delete({ name: 'cart', id }));
  };

  const updateCartItem = ({ action, id }: { action: 'INC' | 'DEC'; id: number }) => {
    setCart(storage().update({ name: 'cart', action, id }));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        setCartItem,
        deleteCartItem,
        updateCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { useCart, CartProvider };

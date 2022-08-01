type CartProductType = { id: number; count: number };

export const storage = () => {
  return {
    get: ({ name }: { name: string }) => {
      return JSON.parse(
        (typeof window !== 'undefined' &&
          (localStorage.getItem(name) as string)) as string
      ) as CartProductType[];
    },
    set: ({ name, data }: { name: string; data: CartProductType }) => {
      const alreadyCartItems = storage().get({ name }) || [];
      console.log({ alreadyCartItems });
      localStorage.setItem(name, JSON.stringify([...alreadyCartItems, data]));
      return [...alreadyCartItems, data];
    },
    delete: ({ name, id }: { name: string; id: number }) => {
      const storageItems = storage().get({ name });
      const filteredItems = storageItems.filter((item) => item.id !== id);
      localStorage.setItem(name, JSON.stringify(filteredItems));
      return filteredItems;
    },
    update: ({
      name,
      action,
      id,
    }: {
      name: string;
      action: 'INC' | 'DEC';
      id: number;
    }) => {
      const storageItems = storage().get({ name });
      const updatedItems = storageItems.map((item) => {
        if (item.id === id) {
          if (action === 'INC') {
            if (item.count < 10) {
              item.count += 1;
            }
          } else {
            if (item.count > 1) {
              item.count -= 1;
            }
          }
        }
        return item;
      });
      localStorage.setItem(name, JSON.stringify(updatedItems));
      return updatedItems;
    },
  };
};

// /* eslint-disable no-unused-vars */
// import React, { createContext, useContext, useState } from 'react';
// import { storage } from '../utils/loca-storage';

// export type CartProductType = { id: number; count: number };

// type CartContextType = {
//   cart: CartProductType[];
//   setCart: (cart: CartProductType[]) => void;
//   addProduct: ({ name, data }: { name: string; data: CartProductType }) => void;
//   update: ({
//     name,
//     action,
//     id,
//   }: {
//     name: string;
//     action: 'INC' | 'DEC';
//     id: number;
//   }) => void;

//   removeProduct: ({ name, id }: { name: string; id: number }) => void;
// };

// const CartContext = createContext({} as CartContextType);
// const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const cartData = useProviderCart();
//   return <CartContext.Provider value={cartData}>{children}</CartContext.Provider>;
// };

// const useCart = () => {
//   return useContext(CartContext);
// };

// function useProviderCart() {
//   const [cart, setCart] = useState<CartProductType[]>(get({ name: 'cart' }));

//   function get({ name }: { name: string }) {
//     // return JSON.parse(localStorage.getItem(name) as string) as CartProductType[];
//     const items = (typeof window !== 'undefined' &&
//       (localStorage.getItem(name) as string)) as string;
//     return JSON.parse(items);
//   }
//   const addProduct = ({ name, data }: { name: string; data: CartProductType }) => {
//     const alreadyCartItems = storage().get({ name });
//     localStorage.setItem(name, JSON.stringify([...alreadyCartItems, data]));
//     setCart([...alreadyCartItems, data]);
//   };
//   const removeProduct = ({ name, id }: { name: string; id: number }) => {
//     const storageItems = storage().get({ name });
//     const filteredItems = storageItems.filter((item) => item.id !== id);
//     localStorage.setItem(name, JSON.stringify(filteredItems));
//     setCart(filteredItems);
//   };
//   const update = ({
//     name,
//     action,
//     id,
//   }: {
//     name: string;
//     action: 'INC' | 'DEC';
//     id: number;
//   }) => {
//     const storageItems = storage().get({ name });
//     const updatedItems = storageItems.map((item) => {
//       if (item.id === id) {
//         if (action === 'INC') {
//           item.count++;
//         } else {
//           item.count--;
//         }
//       }
//       return item;
//     });
//     localStorage.setItem(name, JSON.stringify(updatedItems));
//     setCart(updatedItems);
//   };

//   return { addProduct, cart, setCart, update, removeProduct };
// }
// export { useCart, CartProvider };

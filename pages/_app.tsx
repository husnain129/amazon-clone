// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react';

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import 'swiper/css';
import 'swiper/css/navigation';
import { CartProvider } from '../context/cart';
import { ProductProvider } from '../context/product';
import '../styles/globals.css';
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <ProductProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ProductProvider>
    </CartProvider>
  );
}

export default MyApp;

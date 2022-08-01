/* eslint-disable react/no-children-prop */
import { Flex, Image, Text } from '@chakra-ui/react';
import { Product } from '../../types/product';
import CartItem from './cart-item';

const Cart = ({ cartItems }: { cartItems: Product.Root[] }) => {
  return (
    <Flex
      p="2em"
      flexDir={'column'}
      w="full"
      height={'max-content'}
      minH="70vh"
      alignItems="center"
      justifyContent={'flex-start'}
      gap="2em"
    >
      <Image
        src="https://images-eu.ssl-images-amazon.com/images/G/02/SBP/2018/gateway/1110572_smb_gw_desktop_1500x300_lavolio_1x_uk._CB484123630_.jpg"
        alt="cover"
        w="full"
        height={'15em'}
        objectFit="cover"
        borderRadius={'5px'}
      />
      <Flex
        flexDir={'column'}
        p="1.5em"
        borderRadius={'5px'}
        bg="white"
        w="full"
        gap={'2em'}
      >
        <Text fontSize={'1.5em'} fontWeight="semibold">
          Your Shopping Basket
        </Text>
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <Flex w="full" h="full" alignItems={'center'} justifyContent="center">
            <Text>Please Add Product to cart</Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Cart;

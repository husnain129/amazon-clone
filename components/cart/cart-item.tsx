/* eslint-disable react/no-children-prop */
import { Button, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsDash } from 'react-icons/bs';
import { useCart } from '../../context/cart';
import { Product } from '../../types/product';
const CartItem = ({ item }: { item: Product.Root }) => {
  const { cart, updateCartItem, deleteCartItem } = useCart();
  const [cartCount, setCartCount] = useState(1);
  useEffect(() => {
    setCartCount(cart?.filter((c) => c.id === item.id)[0]?.count);
  }, [cart, item.id]);

  return (
    <Flex
      gap={'2em'}
      w="full"
      justifyContent={'space-between'}
      h="25m"
      alignItems={'center'}
      py="1em"
      boxShadow={'sm'}
    >
      <Image src={item.image} alt="ima" h={'10.5em'} w="8em" objectFit={'cover'} />
      <Flex
        flexDir={'column'}
        justifyContent="space-between"
        alignItems={'flex-start'}
        h="25m"
        gap={'1em'}
        w="full"
      >
        <Text fontSize={'1.5em'} fontWeight="semibold" textTransform={'uppercase'}>
          {item.title}
        </Text>
        <Text pr={'8em'}>{item.description.slice(0, 220)}...</Text>
        <Text fontWeight={'semibold'}>
          ${item.price} x {cartCount} = ${item.price * cartCount}
        </Text>
      </Flex>
      <Flex flexDir={'column'} gap="2em" w="15em">
        <Flex alignItems={'center'} justifyContent="space-between" gap={'1em'}>
          <IconButton
            onClick={() => updateCartItem({ action: 'DEC', id: item.id })}
            aria-label="icon"
            children={<BsDash />}
          />
          <Text>{cartCount}</Text>
          <IconButton
            onClick={() => updateCartItem({ action: 'INC', id: item.id })}
            aria-label="icon"
            children={<AiOutlinePlus />}
          />
        </Flex>
        <Button colorScheme={'red'} onClick={() => deleteCartItem({ id: item.id })}>
          Remove From Cart
        </Button>
      </Flex>
    </Flex>
  );
};

export default CartItem;

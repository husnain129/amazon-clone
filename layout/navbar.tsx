import { Button, Flex, Input, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { BiSearch } from 'react-icons/bi';
import { BsCart3 } from 'react-icons/bs';
import { useCart } from '../context/cart';
import { Setting } from '../setting';
const Navbar = () => {
  const { cart } = useCart();
  const router = useRouter();
  return (
    <Flex
      alignItems={'center'}
      justifyContent="space-between"
      h={'10vh'}
      p={1}
      w="full"
      bg="rgb(19 25 33)"
    >
      <Flex flex={0.12} alignItems="center" justifyContent={'center'} mt={2}>
        <Image
          onClick={() => router.back()}
          src={Setting.amazon_logo}
          width={120}
          height={40}
          alt="logo"
          objectFit="contain"
          style={{ cursor: 'pointer' }}
        />
      </Flex>
      <Flex flex=".5" borderRadius={'.2em'} overflow="hidden">
        <Input borderRadius={'none'} bg="white" focusBorderColor={'transparent'} />
        <Button borderRadius={'none'} colorScheme="yellow">
          <BiSearch size={24} />
        </Button>
      </Flex>
      <Flex
        flex={'.25'}
        color="white"
        alignItems={'center'}
        justifyContent="space-around"
      >
        <Flex
          flexDir={'column'}
          border="1px solid rgb(19 25 33)"
          p={1}
          _hover={{ border: '1px solid white' }}
          alignItems="flex-start"
          cursor={'pointer'}
        >
          <Text fontSize={'.75em'}>Hello Husnain</Text>
          <Text fontSize={'.9em'} fontWeight="bold">
            Account & List
          </Text>
        </Flex>
        <Flex
          flexDir={'column'}
          border="1px solid rgb(19 25 33)"
          p={1}
          _hover={{ border: '1px solid white' }}
          alignItems="flex-start"
          cursor={'pointer'}
        >
          <Text fontSize={'.75em'}>Hello Husnain</Text>
          <Text fontSize={'.9em'} fontWeight="bold">
            Account & List
          </Text>
        </Flex>
        <Flex
          justifyContent={'flex-end'}
          cursor="pointer"
          h="full"
          alignItems="end"
          onClick={() => router.push('/cart')}
        >
          <Flex pos={'relative'}>
            <BsCart3 size={28} />
            <Flex
              pos={'absolute'}
              top={-3}
              alignItems="center"
              justifyContent={'center'}
              right={-1.5}
              w="1em"
              h="1em"
              borderRadius={'50%'}
              bg="red"
            >
              <Text fontSize=".70em">{cart?.length || 0}</Text>
            </Flex>
          </Flex>
          <Text fontSize={'small'} fontWeight="bold">
            Cart
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;

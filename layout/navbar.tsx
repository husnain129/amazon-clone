import { Button, Flex, Input, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';
import { BsCart3 } from 'react-icons/bs';
import { Setting } from '../setting';
const Navbar = () => {
  return (
    <Flex
      alignItems={'center'}
      justifyContent="space-between"
      h={'9vh'}
      p={1}
      w="full"
      bg="rgb(19 25 33)"
    >
      <Flex flex={0.12} alignItems="center" justifyContent={'center'} mt={2}>
        <Image
          src={Setting.amazon_logo}
          width={120}
          height={40}
          alt="logo"
          objectFit="contain"
        />
      </Flex>
      <Flex flex=".5" borderRadius={'.2em'} overflow="hidden">
        <Input
          borderRadius={'none'}
          bg="white"
          focusBorderColor={'transparent'}
        />
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
        >
          <Flex pos={'relative'}>
            <BsCart3 size={28} />
            <Text pos={'absolute'} fontSize=".8em" top={-3} right={0}>
              0
            </Text>
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

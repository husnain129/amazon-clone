import { Flex, Text } from '@chakra-ui/react';
import { IoMdMenu } from 'react-icons/io';
const Items = [
  "Today's Deals",
  'Customer Service',
  'Registry',
  'Gift Card',
  'Sell',
];

const NavbarBottom = () => {
  const _border = {
    border: '1px solid #232f3e',
    hover: '1px solid #fff',
  };
  return (
    <Flex
      w="full"
      alignItems={'center'}
      bg="#232f3e"
      h="6vh"
      gap={'1em'}
      pl="1em"
      color="white"
    >
      <Flex
        p=".1em"
        alignItems={'center'}
        gap=".2em"
        cursor={'pointer'}
        border={_border.border}
        _hover={{ border: _border.hover }}
      >
        <IoMdMenu size={24} />
        <Text>All</Text>
      </Flex>
      {Items.map((item, index) => (
        <Text
          cursor={'pointer'}
          border={_border.border}
          _hover={{ border: _border.hover }}
          p=".1em"
          key={index}
        >
          {item}
        </Text>
      ))}
    </Flex>
  );
};

export default NavbarBottom;

import { Flex, Text } from '@chakra-ui/react';
import { BsFillHeartFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <Flex
      w="full"
      pos={'absolute'}
      left="0"
      bottom="2"
      align={'center'}
      justifyContent="center"
    >
      <Flex
        h={'3em'}
        alignItems="center"
        justifyContent={'center'}
        bg="black"
        color={'white'}
        gap={'.5em'}
        px={'1em'}
        borderRadius={'.31em'}
        cursor={'pointer'}
        onClick={() => {
          window.location.href = 'https://www.github.com/husnain129';
        }}
      >
        <BsFillHeartFill color="white" />
        <Text>@husnain129</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;

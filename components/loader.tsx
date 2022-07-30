import { Flex, Spinner } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Flex
      bg="#eaeded"
      alignItems={'center'}
      justifyContent="center"
      w="full"
      h={'100vh'}
    >
      <Spinner />
    </Flex>
  );
};

export default Loader;

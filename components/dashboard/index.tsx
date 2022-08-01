import { Box, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useProduct } from '../../context/product';
import Footer from '../../layout/footer';
import Card from '../cards/card';

const Dashboard = () => {
  const largeImaegPositions = [4, 13, 18];
  return (
    <Flex w="full" flexDir={'column'} gap={'2em'} p="3em 2em" h="max-content">
      <Flex alignItems={'center'} justifyContent="center" gap={'2em'} flexWrap="wrap">
        {useProduct().product?.map((post, index) => (
          <Box
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition="all 300ms"
            as={motion.div}
            key={index}
          >
            <Card post={post} isLarge={largeImaegPositions.includes(index)} />
          </Box>
        ))}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Dashboard;

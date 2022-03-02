// @ts-check
import { Box, VStack, Image, Text } from "@chakra-ui/react"
import LazyLoad from 'react-lazyload';

function Aboutcard({item}) {
  return (
    <Box minH={['30vh','35vh','40vh']} minW='20rem' h={['30vh','35vh','40vh']}  w='20rem' mr='0'>
      <VStack h='100%' w='100%'>
        <Box position='relative' h='50%' w='100%'>
          <LazyLoad>
            <Image objectFit={'cover'} position='absolute' w='100%' h='100%' src={item.src} alt=''/>
          </LazyLoad>
        </Box>
        <Box textAlign={'left'}>
          <Text fontWeight={'bold'}>
            {item.title}
          </Text>
          <Text>
            {item.description}
          </Text>
        </Box>
      </VStack>
    </Box>
  )
}

export default Aboutcard
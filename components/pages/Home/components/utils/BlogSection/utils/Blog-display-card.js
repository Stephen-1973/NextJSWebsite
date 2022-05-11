// _duplicate of MyHomePage/components/pages/Blogs/components/Blog-collage-display-design-template.js

import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import LazyLoad from 'react-lazyload';


export default function BlogPostsWithImages({ BlogData }) {

  return (
    <Center minW='24rem' mx={3}>
      <Box
        transition='all .4s'
        _groupHover={{ boxShadow: 'lg' }}
        maxH='fit-content'
        maxW={'445px'}
        w={'full'}
        bg='transparent'
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <LazyLoad once>
            <Image
              src={
                BlogData.imageSource ||
                'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
              layout={'fill'}
              alt=''
            />
          </LazyLoad>
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {BlogData.title}
          </Heading>
          <Text color={'gray.500'}>
            {BlogData.pageDescription?.slice(0, 100)}... &rarr;
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Stephen</Text>
            <Text color={'gray.500'}>{new Date(BlogData.time.seconds * 1000).toDateString()} · {BlogData.readTime}</Text>
          </Stack>
          {/* Add likes and thumbsup option */}
        </Stack>
      </Box>
    </Center>
  );
}

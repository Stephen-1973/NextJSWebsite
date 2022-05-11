// @ts-check
import { motion, AnimatePresence } from 'framer-motion';
import { Heading, HStack, Link, Text } from '@chakra-ui/react';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { getDocs, query, where, collection } from 'firebase/firestore';
import { db } from '../../../../../services/firebase';
import BlogPostsWithImages from './utils/Blog-display-card';
import NextLink from 'next/link';



function OtherBlogs({ otherBlogs }) {

  // const [otherBlogs,setBlogs] = useState([]);

  // const [blogsLoaded,setBlogsLoaded] = useState(false);

  // useEffect(() => {
  //   async function fetchBlogs() {
  //     const KubernetesBlogs = await getDocs(query(collection(db, 'blogs'), where('tags', 'array-contains', 'other')));
  //     setBlogs(KubernetesBlogs.docs);
  //     setBlogsLoaded(true)
  //   }
  //   fetchBlogs();
  // }, [])

  return (
    <AnimatePresence initial={true}>
      <motion.div style={{ textAlign: 'left' }} animate={{ transform: 'translateY(0rem)' }} initial={{ transform: "translateY(10rem)" }} transition={{ duration: 1 }} exit={{ transform: 'translateY(10rem)' }}>
        <HStack alignItems='center' w={['95%', '90%', '90%']} m='auto' justifyContent={'space-between'}>
          <Heading as='h1' fontSize={'1.5rem'}>
            Other <span style={{ color: '#5EBAA6' }}>blogs</span>
          </Heading>
          <Text onClick={() => router.push('/blogs')} cursor='pointer' padding=".2rem" transition="all .2s ease-in" _hover={{ backgroundColor: "#5EBAA6", boxShadow: 'lg', translateY: "-.5rem", color: "white" }} color='#5EBAA6' position='relative' borderBottom='1px solid #5EBAA6'>
            Read more &rarr;
          </Text>
        </HStack>
        <HStack w={['98%', '96%', '93%']} m='auto' overflow='auto' mt='5' justifyContent='flex-start' spacing={0}>
          {
            otherBlogs.map((blogData, index) => {
              return (
                <NextLink key={index} href={`/read/${blogData.id}`} passHref>
                  <Link role='group' _hover={{ textDecor: "none" }}>
                    <BlogPostsWithImages BlogData={blogData} />
                  </Link>
                </NextLink>
              )
            })
          }
        </HStack>
      </motion.div>
    </AnimatePresence>
  )
}

export default OtherBlogs;
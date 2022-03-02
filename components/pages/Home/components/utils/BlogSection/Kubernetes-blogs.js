// @ts-check
import { Box, Button, Heading, Link, Stack, Text, VStack } from "@chakra-ui/react"
import { query,where,getDocs,collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../../services/firebase";
import BlogPostsWithImages from "./utils/Blog-display-card";
import NextLink from 'next/link';
import Router from "next/router";


function KubernetesBlogs() {

  const [kubBlogs,setBlogs] = useState([]);

  const [blogsLoaded,setBlogsLoaded] = useState(false);
  
  useEffect(() => {
    async function fetchBlogs() {
      const KubernetesBlogs = await getDocs(query(collection(db, 'blogs'), where('tags', 'array-contains-any', ['kubernetes',
      'microservices','nodejs'])));
      setBlogs(KubernetesBlogs.docs);
      setBlogsLoaded(true)
    }
    fetchBlogs();
  }, [])
  
  return (
    <Box m={[3,5,'10']} mt='0'>
      <Stack direction={['column', 'column', 'row']}>
        <VStack spacing={5} alignItems={'left'} minW='20rem' w='20rem' maxW='20rem'>
          <Text fontWeight='bold'>
            Recent Blogs
          </Text>
          <Heading>
            Discover the blogs on <span className='span'>Microservices</span> with Node.js and <span className="span">Kubernetes</span>
          </Heading>
          <Button onClick={() => Router.push('/blogs')} w='fit-content' variant='outline' borderRadius='2.9rem'>
            Discover
          </Button>
        </VStack>
        <Stack direction={['column', 'column', 'row']} h={['fit-content', 'fit-content', 'auto']} overflow='auto' mt={"10rem"}>
          {
            blogsLoaded && kubBlogs.map((blogData, index) => {
              return (
                <NextLink key={index} href={`/read/${blogData.data().id}`} passHref>
                  <Link role='group' _hover={{textDecor:"none"}}>
                    <BlogPostsWithImages BlogData={blogData.data()} />
                  </Link>
                </NextLink>
              )
            })
          }
        </Stack>
      </Stack>
    </Box>
  )
}

export default KubernetesBlogs
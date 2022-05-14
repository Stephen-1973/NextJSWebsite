// @ts-check
import { Box, Button, Heading, Link, Stack, Text, VStack } from "@chakra-ui/react"
import BlogPostsWithImages from "./utils/Blog-display-card";
import NextLink from 'next/link';
import Router from "next/router";



function KubernetesBlogs({ kubernetesBlogs }) {
  return (
    <Box m={[3, 5, '10']} mt='0'>
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
        <Stack direction={'row'} h={['fit-content', 'fit-content', 'auto']} overflow='auto' mt={"10rem"}>
          {
            kubernetesBlogs.map((blogData, index) => {
              return (
                <NextLink key={index} href={`/read/${blogData.id}`} passHref>
                  <Link role='group' _hover={{ textDecor: "none" }}>
                    <BlogPostsWithImages BlogData={blogData} />
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
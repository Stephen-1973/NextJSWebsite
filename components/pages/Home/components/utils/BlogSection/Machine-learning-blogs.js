// @ts-check
import { Box, Button, Heading, Stack, Text, VStack, Link } from "@chakra-ui/react"
import BlogPostsWithImages from "./utils/Blog-display-card";
import NextLink from "next/link";
import Router from "next/router";



function MachineLearningBlogs({ machineBlogs }) {
  // const [kubBlogs,setBlogs] = useState([]);

  // const [blogsLoaded,setBlogsLoaded] = useState(false);

  // useEffect(() => {
  //   async function fetchBlogs() {
  //     const KubernetesBlogs = await getDocs(query(collection(db, 'blogs'), where('tags', 'array-contains-any', ['machine-learning',
  //     'python','reinforcement-learning','deep-learning','artificial-intelligence'])));
  //     setBlogs(KubernetesBlogs.docs);
  //     setBlogsLoaded(true)
  //   }
  //   fetchBlogs();
  // }, [])
  return (
    <Box m={[3, 5, '10']} mt='0'>
      <Stack display={['none', 'none', 'flex']} direction={['column', 'column', 'row']}>
        <Stack h={['fit-content', 'fit-content', 'auto']} direction={['column', 'column', 'row']} overflow='auto'>
          {
            machineBlogs.map((blogData, index) => {
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
        <VStack pl={5} spacing={5} alignItems={'left'} minW='20rem' w='20rem' maxW='20rem'>
          <Text fontWeight='bold'>
            Recent Blogs
          </Text>
          <Heading>
            Discover the blogs on <span className="span">Microservices</span> with Node.js and <span className="span">Kubernetes</span>
          </Heading>
          <Button onClick={() => Router.push("/blogs")} w='fit-content' variant='outline' borderRadius='2.9rem'>
            Discover
          </Button>
        </VStack>
      </Stack>
      <Stack display={['flex', 'flex', 'none']} direction={['column', 'column', 'row']}>
        <VStack pl={5} spacing={5} alignItems={'left'} minW='20rem' w='20rem' maxW='20rem'>
          <Text fontWeight='bold'>
            Recent Blogs
          </Text>
          <Heading>
            Discover the blogs on <span className="span">Microservices</span> with Node.js and <span className='span'>Kubernetes</span>
          </Heading>
          <Button w='fit-content' variant='outline' borderRadius='2.9rem'>
            Discover
          </Button>
        </VStack>
        <Stack h={['fit-content', 'fit-content', 'auto']} direction={['column', 'column', 'row']} overflow='auto'>
          {
            machineBlogs.map((blogData, index) => {
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

export default MachineLearningBlogs
// @ts-check

import { ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Button, Center, Heading, HStack, Icon, Text, useColorModeValue } from "@chakra-ui/react"
import router from "next/router"
import NavBar from "../../utils/universal/NavBar"
import BlogDisplay from "./components/Blog-display"
import { BoxStyles } from "./components/utils/Styles"
import Footer from '../../utils/universal/Footer';





function BlogPage({ KUB_BLOGS, MACHINE_BLOGS, OTHER_BLOGS }) {

  return (
    <>
      <NavBar activeTab='Blogs' />
      <Box bg='url(/pages/Blogs/Blog-bg.avif),url(/pages/Blogs/Blog-bg.jpeg)' bgSize='cover' bgRepeat={'no-repeat'} bgPos='center' {...BoxStyles} h={['30vh', '40vh', '50vh']} m='auto' my={5}>
        <Center h='100%' flexDirection={'column'} justifyContent='space-evenly'>
          <Heading color={useColorModeValue('white', 'black')}>
            Find the best blogs on <br /> <span style={{ textShadow: '1px 1px 1px white' }}>programming</span>
          </Heading>
          <Button bg='salmon' _focus={{ outline: "none" }} onClick={() => router.push("#more")}>
            <HStack>
              <Text>
                Read more
              </Text>
              <Icon as={ChevronRightIcon} />
            </HStack>
          </Button>
        </Center>
      </Box>
      <BlogDisplay kubBlogs={JSON.parse(KUB_BLOGS)} machineBlogs={JSON.parse(MACHINE_BLOGS)} otherBlogs={JSON.parse(OTHER_BLOGS)} />
      <Footer />
    </>
  )
}



export default BlogPage




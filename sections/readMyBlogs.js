import { Box, Button, HStack,Text } from '@chakra-ui/react';

function ReadMyBlogs() {
  return (
    <Box bgImage='url(/blog.avif),url(/blog.jpeg)' bgSize='cover' bgPos='center' w='80%' display='flex' justifyContent='center' py={10} mx='auto' backgroundColor='gray.200'>
      <Button role='group' transition='all .2s' _hover={{backgroundPosition: '100%',color:'gray.800'}} backgroundImage='linear-gradient(240deg, white 0%,#fff 50%, salmon 50%)' backgroundSize='230%' backgroundPosition='0%'>
        <Text>
          <HStack>
            <Text>Read My Blogs</Text>
            <Text transition='all .2s ease-in' _groupHover={{marginLeft: '1rem'}}>&rarr;</Text>
          </HStack>
        </Text>
      </Button>
    </Box>
  )
}

export default ReadMyBlogs


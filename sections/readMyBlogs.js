import { Box, Button, HStack,Text,Link,useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';

function ReadMyBlogs() {
  const LinkItem = ({ href, path, _target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
      <NextLink href={href} passHref>
        <Link
          p={2}
          bg={active ? 'grassTeal' : undefined}
          color={active ? '#202023' : inactiveColor}
          target={_target}
          {...props}
        >
          {children}
        </Link>
      </NextLink>
    )
  }
  
  return (
    <Box bgImage='url(/blog.avif),url(/blog.jpeg)' bgSize='cover' bgPos='center' w='80%' display='flex' justifyContent='center' py={10} mx='auto' backgroundColor='gray.200'>
    <Button _focus={{textDecoration:'none'}} role='group' transition='all .2s' _hover={{backgroundPosition: '100%',color:'gray.800'}} backgroundImage='linear-gradient(240deg, white 0%,#fff 50%, salmon 50%)' backgroundSize='230%' backgroundPosition='0%'>
      <Text>
        <HStack>
          <Text>
            <NextLink href='/blogs' passHref>
              <Link _hover={{textDecoration:'none'}} _active={{outline:'none'}} _visited={{outline:'none'}} _focus={{outline: 'none'}}>
                Read My Blogs
              </Link>
            </NextLink>
          </Text>
          <Text transition='all .2s ease-in' _groupHover={{marginLeft: '1rem'}}>&rarr;</Text>
        </HStack>
      </Text>
    </Button>
  </Box>
  )
}

export default ReadMyBlogs


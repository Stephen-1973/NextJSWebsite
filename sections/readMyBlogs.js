import { Box, Button, HStack,Text,Link,useColorModeValue, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import router from 'next/router';

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

  const pickBg = useColorModeValue("rgba(255,255,255,0.4)","rgba(11, 11, 11, 0.4)")
  
  return (
    <Box bgImage='url(/blog.avif),url(/blog.jpeg)' bgSize='cover' bgPos='center' w={['100%','100%','80%']} m='auto' display='flex' justifyContent='center' py={10} mx='auto' backgroundColor='gray.200'>
      <VStack alignItems='center' spacing={5}  w={['90%','85%','80%']} bg={pickBg} borderRadius={'lg'} p={[3,3,6]}>
        <Text fontWeight='semibold'>
          You're an ordinary high school graduate with no cs degree willing to work at Google,Facebook or Apple.
          Then come join me and be a part of dynamic blog journey and get the skills you need for your own startup/Job.
        </Text>
        <NextLink href='/blogs' passHref>
        <Link _hover={{textDecoration:'none'}} _active={{outline:'none'}} _visited={{outline:'none'}} _focus={{outline: 'none'}}>
          <Button _focus={{textDecoration:'none'}} role='group' transition='all .2s' _hover={{backgroundPosition: '100%',color:'gray.800'}} backgroundImage='linear-gradient(240deg, white 0%,#fff 50%, salmon 50%)' backgroundSize='230%' backgroundPosition='0%'>
            <Text>
              <HStack>
                <Text>
                  Read My Blogs
                </Text>
                <Text transition='all .2s ease-in' _groupHover={{marginLeft: '1rem'}}>&rarr;</Text>
              </HStack>
            </Text>
          </Button>
        </Link>
        </NextLink>
      </VStack>
  </Box>
  )
}

export default ReadMyBlogs

 
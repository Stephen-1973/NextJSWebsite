import { Box, Heading, Text, HStack, MenuItem, Menu, MenuList, IconButton, Button, MenuButton } from '@chakra-ui/react';
import {TimeIcon,ExternalLinkIcon,TriangleDownIcon} from '@chakra-ui/icons';
import Image from 'next/image';
import {useColorModeValue} from '@chakra-ui/react'
function BlogsDesign({ BlogData }) {
  const bgBoxColorMode = useColorModeValue('gray.100', 'gray.700')
  const textColorMode = useColorModeValue('gray.900', 'gray.50')
  return (
      <Box bg={bgBoxColorMode} minW='15rem' margin={['0 0 1rem 0','0 1rem 1rem .5rem','0 1rem 1rem .5rem']} maxW='17rem' w='40vw' h='fit-content'>
            <Image isLazy={true} alt={BlogData.imageDescription} width="1000%" height="700%" src={BlogData.imageSource} />
            <HStack float=
              'right'>
              <IconButton icon={
                <HStack>
                  <Text>{BlogData.readTime.slice(0,5)}</Text>
                  <TimeIcon />
                </HStack>
              } />
              <Menu isLazy={true}>
                <MenuButton as={IconButton} icon={<TriangleDownIcon/>} varaint='outline'>
                </MenuButton>
                <MenuList>
            <MenuItem>
              {BlogData.time}
                  </MenuItem>
            <MenuItem>
              {BlogData.tags.map(tag => <Text key={tag}>#{tag}</Text>)}
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
      <Heading ml={2} float='left' fontSize="1.23rem" color={textColorMode} fontWeight="bold" mb={4}>
        {BlogData.title}
            </Heading>
            <Text ml={2} float='left' fontSize=".7rem" color={textColorMode} fontWeight="bold" mb={4}>
             {BlogData.pageDescription.slice(0, 100)}...
            </Text>
            <div style={{
              width: "100%", display: 'flex',justifyContent:'center'}}>
              <Button as='button' varaint='solid'>
                  Read
                <IconButton size='xl' as={ExternalLinkIcon} ml={2}>
                </IconButton>
              </Button>
            </div>
          </Box>
  )
}

export default BlogsDesign

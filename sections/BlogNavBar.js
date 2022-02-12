import ThemeToggleButton from '../helpers/blog-theme-toggle-button';
import {
  HStack, Box, IconButton,Heading, Flex, Icon, Image, MenuList,Menu,MenuButton,MenuItem,Link, Text} from '@chakra-ui/react';
import { AnimatePresence,motion } from 'framer-motion';
import { useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'

import NextLink from 'next/link'



function NavBar({blogUrl}) {

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

  const bgSvg = useColorModeValue('black', '#fff')



  const GithubLogo = () => (<svg stroke="currentColor" fill={GitHubLogoBg} strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path></svg>)
  const Logo = () => (
    <motion.svg style={{ transform:'rotate(-3deg)' }} xmlns="http://www.w3.org/2000/svg" width="2rem" height="3rem" viewBox="0 0 229.211 132.538">
                <g id="Group_5" data-name="Group 5" transform="translate(-611.694 -686.263)">
                  <path id="Path_1" data-name="Path 1" d="M623.075,731.979c.3-45.76,46.016-43.234,46.016-43.234H785.9l-86.277,43.234Z" transform="translate(55 -2.458)" fill={bgSvg}/>
                  <path id="Path_2" data-name="Path 2" d="M622.6,727.521c.3-41.045,46.914-38.779,46.914-38.779H787.408l-88.375,38.779Z" transform="translate(1399.102 1507.521) rotate(-180)" fill={bgSvg}/>
                  <path id="Path_3" data-name="Path 3" d="M677.6,732.435c20.286,44.279,47.036,28.542,47.036,28.542" transform="matrix(0.819, 0.574, -0.574, 0.819, 544.143, -258.632)" fill="#000"/>
                  <path id="Path_4" data-name="Path 4" d="M679.15,738.16c9.828-5.207,20.82-32.768,32.117-32.376,11.088.384,21.737,19.108,21.737,19.108" transform="matrix(-0.156, -0.988, 0.988, -0.156, 153.67, 1566.461)" fill={bgSvg}/>
                  <rect id="Rectangle_5" data-name="Rectangle 5" width="55" height="52" transform="translate(700 728)" fill={bgSvg}/>
                  <path id="Polygon_2" data-name="Polygon 2" d="M17.163,4.495a2,2,0,0,1,3.7,0l16.027,38.95a2,2,0,0,1-1.85,2.761H2.986a2,2,0,0,1-1.85-2.761Z" transform="translate(664.59 751.553) rotate(-52)" fill={bgSvg}/>
                  <rect id="Rectangle_6" data-name="Rectangle 6" width="30" height="21" rx="10.5" transform="translate(678 722)" fill={bgSvg}/>
                  <path id="Polygon_3" data-name="Polygon 3" d="M18,0,36,16H0Z" transform="translate(741 764)" fill={bgSvg}/>
                </g>
              </motion.svg>
  )

  const GitHubLogoBg = useColorModeValue('black','white')

  
  return (
    <AnimatePresence>
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{y:-20,opacity:0}} transition={{ duration: 1 }}>
        <HStack justifyContent='space-between' w='80%' m='auto'>
          <Flex alignItems='center' flexDirection='row'>
            <IconButton aria-label='logo' bg='transparent' _hover={{bg: 'transparent'}}>
              <Icon as={Logo}/>
            </IconButton>
            <Heading variant='page-title'>Stephen</Heading>
            <HStack ml='2rem' spacing={5} display={{ base: 'none', md: 'flex' }}>
              <NextLink passHref href='/about'>
                <Link _focus={{textDecoration:'none'}} _active={{textDecoration:'none'}} _hover={{textDecoration:'none'}}>About</Link>
              </NextLink>
              <NextLink href='/work' passHref>
                <Link _focus={{textDecoration:'none'}} _active={{textDecoration:'none'}} _hover={{textDecoration:'none'}}>Work</Link>
              </NextLink>
              <NextLink href='/blogs' passHref>
                <Link _focus={{textDecoration:'none'}} _active={{textDecoration:'none'}} _hover={{textDecoration:'none'}}>Blogs</Link>
              </NextLink>
              <NextLink href='https://github.com/stephen-1973/NextJsWebsite'>
                <HStack>
                  <GithubLogo />
                  <Link>
                    View Source
                  </Link>
                </HStack>
              </NextLink>
          </HStack>
          </Flex>
          <HStack spacing={5}>
            <ThemeToggleButton blogUrl={blogUrl}/>
            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy={true} id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  <NextLink href="/about" passHref>
                    <MenuItem as={Link}>About</MenuItem>
                  </NextLink>
                  <NextLink href="/work" passHref>
                    <MenuItem as={Link}>Blogs</MenuItem>
                  </NextLink>
                  <NextLink href="/blogs" passHref>
                    <MenuItem as={Link}>Search</MenuItem>
                  </NextLink>
                  <MenuItem
                    as={Link}
                    href="https://github.com/stephen-1973/NextJsWebsite"
                  >
                    View Source
                    </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </HStack>
        </HStack>
      </motion.div>
    </AnimatePresence>
  )
}

export default NavBar


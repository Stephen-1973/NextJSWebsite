import ThemeToggleButton from './utils/theme-toggle-button';
import {
  HStack, Box, IconButton,Heading, Flex, Icon, Image, MenuList,Menu,MenuButton,MenuItem,Link} from '@chakra-ui/react';
import { AnimatePresence,motion } from 'framer-motion';
import { useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import router from 'next/router';
import Logo from './utils/Logo';



function NavBar({activeTab}) {
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

  const GithubLogo = () => (<svg stroke="currentColor" fill={GitHubLogoBg} strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path></svg>)


  const GitHubLogoBg = useColorModeValue('black','white')

  const activeStyles = {
    borderRadius: "full",
    color: useColorModeValue("white",'black'),
    py: "1",
    px: "3",
    bg: useColorModeValue("black",'white')
  }

  
  return (
    <AnimatePresence>
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{y:-20,opacity:0}} transition={{ duration: 1 }}>
        <HStack justifyContent='space-between' w={['95%','90%','80%']} m='auto'>
          <Flex alignItems='center' flexDirection='row'>
          <IconButton _focus={{outline:"none"}} onClick={() => {router.push('/')}} aria-label='logo' bg='transparent' _hover={{bg: 'transparent'}}>
              <Icon as={Logo}/>
            </IconButton>
            <Heading cursor={'pointer'} onClick={() => router.push("/")} variant='page-title'>Stephen</Heading>
            <HStack ml='2rem' spacing={5} display={{ base: 'none', md: 'flex' }}>
              <NextLink passHref href='/about/'>
                <Link transition='all .2s ease-in' {...activeTab === 'About' ? activeStyles : {padding:'0'}} _focus={{textDecoration:'none'}} _active={{textDecoration:'none'}} _hover={{textDecoration:'none'}}>About</Link>
              </NextLink>
              <NextLink href='/contact' passHref>
                <Link transition='all .2s ease-in' {...activeTab === 'Work' ? activeStyles : {padding:'0'}} _focus={{textDecoration:'none'}} _active={{textDecoration:'none'}} _hover={{textDecoration:'none'}}>Contact</Link>
              </NextLink>
              <NextLink href='/blogs' passHref>
                <Link transition='all .2s ease-in' {...activeTab === 'Blogs' ? activeStyles : {padding:'0'}} _focus={{textDecoration:'none'}} _active={{textDecoration:'none'}} _hover={{textDecoration:'none'}}>Blogs</Link>
              </NextLink>
              <NextLink href='https://github.com/stephen-1973/MyHomePage'>
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
            <ThemeToggleButton/>
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
                  <NextLink href="/contact" passHref>
                    <MenuItem as={Link}>Contact</MenuItem>
                  </NextLink>
                  <NextLink href="/blogs" passHref>
                    <MenuItem as={Link}>Blogs</MenuItem>
                  </NextLink>
                  <MenuItem
                    as={Link}
                    href="https://github.com/stephen-1973/MyHomePage"
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


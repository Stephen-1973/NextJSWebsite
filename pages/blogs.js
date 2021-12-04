import { getDocs, collection,query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { db } from '../services/firebase';
import {
  Box,
  Heading,
  Text,
  IconButton,
  HStack,
  VStack,
  MenuButton,
  MenuList,
  Menu,
  MenuItem,
} from '@chakra-ui/react';
import { ExternalLinkIcon,TimeIcon,TriangleDownIcon, } from '@chakra-ui/icons';
import Image from 'next/image';
import { useColorModeValue } from '@chakra-ui/react';
import Navbar from '../sections/NavBar';
import { motion, AnimatePresence } from 'framer-motion';




function Blogs({ docs }) {
  const [blogs, setBlogs] = useState([])
  const [initialRender, setRender] = useState(true)

  useEffect(() => {
    if (initialRender)
    { return null; }
    else {
      axios.post('https://blogstephen.herokuapp.com/')
    }
  }, [initialRender])

  return (
    <>
      <Navbar />
      <AnimatePresence initial={true}>
        <motion.div initial={{y: 100,opactiy: 0}} transition={{duration: 1}} animate={{y: 0,opacity: 1}} style={{
          display: 'flex', flexDirection: 'row', flexWrap: 'wrap'
        }}>
                    <Box bg={bgBoxColorMode} minW='15rem' margin={['auto','0','0']} maxW='17rem' w='40vw' h='fit-content'>
            <Image isLazy={true} alt='dockerImage' width="1000%" height="700%" src="data:image/png;base64,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" />
            <HStack float=
              'right'>
              <IconButton icon={
                <HStack>
                  <Text>3m</Text>
                  <TimeIcon />
                </HStack>
              } />
              <Menu isLazy={true}>
                <MenuButton as={IconButton} icon={<TriangleDownIcon/>} varaint='outline'>
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    4 months ago 
                  </MenuItem>
                  <MenuItem>
                    #Python
                    #Docker
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
            <Heading float='left' fontSize="1.23rem" color={textColorMode} fontWeight="bold" mb={4}>
              Learn Docker in 2 mins
            </Heading>
            <Text float='left' fontSize=".7rem" color={textColorMode} fontWeight="bold" mb={4}>
              Docker is a containerization technology that provides a simple way to package and distribute applications.
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
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Blogs

export async function getServerSideProps() {
  const docs = await getDocs(query(collection(db, 'blogs')));
  const fetchedDocs = docs.docs
  fetchedDocs.map(doc => console.log(doc.data()))
  return {
    props: {
      docs: 'Hello'
    }
  }
}


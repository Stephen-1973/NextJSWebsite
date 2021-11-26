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


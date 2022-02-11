import { getDocs, collection,query, where } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../services/firebase';
import Navbar from '../sections/NavBar';
import { motion, AnimatePresence } from 'framer-motion';
import BlogsDesign from '../helpers/blogsDesign';
import NextLink from 'next/link';
import {useColorModeValue,Link} from '@chakra-ui/react';




function Blogs({ docs }) {
  const notFoundBlogDetails = [{
    title:"No Blogs Found",
    pageDescription: "Check again in a few minutes",
    tags: ['no','blogs'],
    readTime: "3 mins read",
    time: new Date
  }]
  const [blogs, setBlogs] = useState([JSON.parse(docs)[0] || notFoundBlogDetails])
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
    <>
      <Navbar />
      <AnimatePresence initial={true}>
        <motion.div initial={{y: 100, opacity: 0}} transition={{duration: 1}} animate={{y: 0,opacity: 1}} style={{
          display: 'flex', flexDirection: 'row', flexWrap: 'wrap',margin: '2rem 0 0 1rem'
        }}>
           { blogs[0].map(blog => {
             return (
             <NextLink key={blog.id} href={`/read/${blog.id}`}>
               <Link mx='1rem' _hover={{textDecoration:'none'}}>
                <BlogsDesign BlogData={blog}/>
               </Link>
             </NextLink>)
            })}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Blogs

export async function getServerSideProps() {
  const docs = await getDocs(query(collection(db, 'blogs'),where('status','==','Publish')));
  const fetchedDocs = []
  const firebaseDocs = docs.docs
  firebaseDocs.map(doc => fetchedDocs.push(doc.data()))
  return {
    props: {
      docs: JSON.stringify(fetchedDocs)
    }
  }
}


import { getDocs, collection,query, where } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../services/firebase';
import Navbar from '../sections/NavBar';
import { motion, AnimatePresence } from 'framer-motion';
import BlogsDesign from '../helpers/blogsDesign';
import NextLink from 'next/link';
import {useColorModeValue,Link} from '@chakra-ui/react';
import Head from 'next/head';




function Blogs({ docs }) {
  const notFoundBlogDetails = [{
    title:"No Blogs Found",
    pageDescription: "Check again in a few minutes",
    tags: ['no','blogs'],
    readTime: "3 mins read",
    time: new Date
  }]
  const [blogs, setBlogs] = useState([JSON.parse(docs) || notFoundBlogDetails])
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
      <Navbar activeTab='Blogs' />
      <Head>
        <title>
          Blogs | Stephen
        </title>
      </Head>
      <AnimatePresence initial={true}>
        <motion.div initial={{y: 100, opacity: 0}} transition={{duration: 1}} animate={{y: 0,opacity: 1}} style={{
          display: 'flex', flexDirection: 'row', flexWrap: 'wrap',margin: '2rem 0 0 1rem'
        }}>
           { blogs[0].map(blog => {
             return (
             <NextLink key={blog.id} passHref href={`/read/${blog.id}`}>
               <Link _focus={{textDecoration:'none'}} _active={{textDecoration:'none'}} mx='1rem' _hover={{textDecoration:'none'}}>
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
  const fetchedDocs = []
  const beforeFirebase = new Date()
  const docs = await getDocs(query(collection(db, 'blogs'),where('status','==','Publish')));
  docs.docs.map(doc => fetchedDocs.push(doc.data()))
  const afterFirebase = new Date()
  const beforeAPI = new Date()
  await fetch('http://localhost:3000/api/hello', { method: "GET", headers: { 'Content-Type': 'application/json','User-Agent': "Safari" } }).then((t) => t.json());
  const afterAPI = new Date()
  const firebaseTime = afterFirebase - beforeFirebase
  const APITIME = afterAPI - beforeAPI
  console.log(`Fetched Firebase docs in ${firebaseTime}`);
  console.log(`Fetched API docs in ${APITIME}`);
  console.log(`Time saved could be ${firebaseTime - APITIME}`);
  return {
    props: {
      docs: JSON.stringify(fetchedDocs)
    }
  }
}


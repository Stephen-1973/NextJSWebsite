import { getDocs, collection,query } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../services/firebase';
import Navbar from '../sections/NavBar';
import { motion, AnimatePresence } from 'framer-motion';
import BlogsDesign from '../helpers/blogsDesign';
import router from 'next/router';

function Blogs({ docs }) {
  const [blogs, setBlogs] = useState([JSON.parse(docs)])


  return (
    <>
      <Navbar />
      <AnimatePresence initial={true}>
        <motion.div initial={{y: 100,opactiy: 0}} transition={{duration: 1}} animate={{y: 0,opacity: 1}} style={{
          display: 'flex', flexDirection: 'row', flexWrap: 'wrap',margin: '2rem 0 0 1rem'
        }}>
           { blogs[0].map(blog => {
             return <div onClick={() => { router.push(`/read/${blog.title}`) }} key={blog.id}>
               <BlogsDesign BlogData={blog} />
             </div>
            })}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Blogs

export async function getServerSideProps() {
  const docs = await getDocs(query(collection(db, 'blogs')));
  const fetchedDocs = []
  const firebaseDocs = docs.docs
  firebaseDocs.map(doc => fetchedDocs.push(doc.data()))
  return {
    props: {
      docs: JSON.stringify(fetchedDocs)
    }
  }
}


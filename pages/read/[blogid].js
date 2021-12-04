import { getDocs, collection, query, where,onSnapshot } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { HStack,Box,Text,IconButton } from '@chakra-ui/react';
import Head from 'next/head'
import {TriangleDownIcon,ViewIcon} from '@chakra-ui/icons'
import NavBar from '../../sections/NavBar';
import { useEffect,useState } from 'react'
import router from 'next/router';


function BlogId({ data }) {

  const [firstBlog, setFirstBlog] = useState(false)
  const [nextBlog, setNextBlog] = useState([])
  const [prevBlog, setPrevBlog] = useState([])
  const [lastBlog,setLastBlog] = useState(false)

  const doc = JSON.parse(data)

  useEffect(() => {
    async function fetchBlogs() {
      if (doc.number === 1) {
        setFirstBlog(true)
        onSnapshot(query(collection(db, 'blogs'), where('number', '==', doc.number+1)), (snapshot) => {
          setNextBlog(snapshot.docs[0].data())
          setLastBlog(false)
        })
      }
      else {
         onSnapshot(query(collection(db, 'blogs'), where('number', '==', doc.number - 1)), (snapshot) => {
           setPrevBlog(snapshot.docs[0].data())
           setFirstBlog(false)
         })
        onSnapshot(query(collection(db, 'blogs'), where('number', '==', doc.number + 1)), (doc) => {
          if (doc.docs.length === 0) {
            setLastBlog(true)
          }
          else {
            setNextBlog(doc.docs[0].data())
            setLastBlog(false)
          }
        })
      }
    }
    fetchBlogs()
  }, [doc])

  return (
    <>
      <NavBar />
      <Box my={10}  w='100%' display='flex' justifyContent='space-evenly'>
        <IconButton onClick={()=> {router.push(`/read/${prevBlog.title}`)}} opacity={firstBlog && ('0')} visibility={firstBlog && ('hidden')} transform='rotate(90deg)' icon={<TriangleDownIcon/>}></IconButton>
        <IconButton onClick={()=> {router.push(`/blogs`)}} icon={<ViewIcon />}></IconButton>
        <IconButton opacity={lastBlog && ('0')} visibility={lastBlog && ('hidden')} onClick={()=> {router.push(`/read/${nextBlog.title}`)}} transform="rotate(-90deg)" icon={<TriangleDownIcon/>}></IconButton>
      </Box>
      <Head>
        <link rel='stylesheet' href={doc.cssRef}/>
        <title>{doc.title}</title>
        <meta name='description' description={doc.pageDescription}></meta>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: doc.message }}>
      </div>
    </>
  )
}

export default BlogId


export async function getServerSideProps(context) {
  const { blogid } = context.query

  const getDoc = await getDocs(query(collection(db, 'blogs'), where('title', '==', blogid)));
  const fetchedDoc = getDoc.docs[0].data()
  return {
    props: {
      data: JSON.stringify(fetchedDoc)
    }
  }
}
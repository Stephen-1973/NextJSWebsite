// @ts-nocheck
import { getDocs, collection, query, where,onSnapshot } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { 
  Box,
  Flex,
  Link,
  useColorModeValue
} from '@chakra-ui/react';
import Head from 'next/head';
import { useEffect,useState } from 'react'
import NextLink from 'next/link';
import CardDisplay from './components/prev-next-blog-cards';
import Script from 'next/script';
import NavBar from '../../sections/BlogNavBar';
import LazyLoad from 'react-lazyload';


function BlogId({ data }) {
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

  const [firstBlog, setFirstBlog] = useState(false)
  const [nextBlog, setNextBlog] = useState([])
  const [prevBlog, setPrevBlog] = useState([])
  const [lastBlog,setLastBlog] = useState(false)
  const [showNextBlogs,setShowNextBlogs] = useState(false);

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
  }, [data])
  
  return (
    <Box maxW='100rem' m={'auto'}>
      <NavBar blogUrl={`/read/${doc.id}`} activeTab='Blogs'/>
      {
       (!(firstBlog) && showNextBlogs) && (
        
          <NextLink passHref href={`/read/${prevBlog.id}`}>
            <Link _hover={{textDecoration:'none'}} _active={{textDecoration:'none'}} _focus={{textDecoration:'none'}}>
            <CardDisplay imageSrc={prevBlog.imageSource} Title={prevBlog.title} Description={prevBlog.pageDescription} prevBlog={true}/>
            </Link>
          </NextLink>
        )
      }


      <Head>
        <title>{doc.title}</title>
        <meta name='description' content={doc.pageDescription}></meta>
      </Head>

      <Script src={doc.scriptSource} strategy='beforeInteractive' onLoad={() => {setShowNextBlogs(true)}}></Script>

      <Box mt='10'>
        <div id='root'>
          
        </div>
      </Box>
      {
        (!(lastBlog) && showNextBlogs) && (
          <LazyLoad>
            <Box display='flex' alignItems='flex-end' justifyContent={'flex-end'}>
              <NextLink href={`/read/${nextBlog.id}`} passHref>
                <Link _hover={{textDecoration:'none'}} _active={{textDecoration:'none'}} _focus={{textDecoration:'none'}} w='fit-content'>
                    <CardDisplay imageSrc={nextBlog.imageSource} Title={nextBlog.title} Description={nextBlog.pageDescription} nextBlog={true}/>
                </Link>
              </NextLink>
            </Box>    
          </LazyLoad>
        )
      }
     
    </Box>
   
  )
}

export default BlogId


export async function getServerSideProps(context) {
  const { blogid } = context.query

  const getDoc = await getDocs(query(collection(db, 'blogs'), where('id', '==', blogid)));
  const fetchedDoc = getDoc.docs[0].data()
  return {
    props: {
      data: JSON.stringify(fetchedDoc)
    }
  }
}

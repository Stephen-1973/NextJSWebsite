// @ts-check
import { getDocs, collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../services/firebase';
import {
  Box,
  Flex,
  Link,
  useColorModeValue
} from '@chakra-ui/react';
import Head from 'next/head';
import { useEffect, useState } from 'react'
import NextLink from 'next/link';
import CardDisplay from './components/other-blogs-card';
import Script from 'next/script';
import NavBar from '../Blogs/components/Blog-navbar';
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
  const [lastBlog, setLastBlog] = useState(false)
  const [showNextBlogs, setShowNextBlogs] = useState(false);

  const doc = JSON.parse(data)



  // FETCH OTHER BLOGS IN A CLEANER WAY.

  // useEffect(() => {
  //   async function fetchBlogs() {
  //     console.log("RUnning")
  //     if (doc.number === 1) {
  //       setFirstBlog(true)
  //       onSnapshot(query(collection(db, 'blogs'), where('number', '==', doc.number + 1)), (snapshot) => {
  //         // @ts-ignore
  //         setNextBlog(snapshot.docs[0].data())
  //         setLastBlog(false)
  //       })
  //     }
  //     else {
  //       onSnapshot(query(collection(db, 'blogs'), where('number', '==', doc.number - 1)), (snapshot) => {
  //         // @ts-ignore
  //         setPrevBlog(snapshot.docs[0].data())
  //         setFirstBlog(false)
  //       })
  //       onSnapshot(query(collection(db, 'blogs'), where('number', '==', doc.number + 1)), (doc) => {
  //         if (doc.docs.length === 0) {
  //           setLastBlog(true)
  //         }
  //         else {
  //           // @ts-ignore
  //           setNextBlog(doc.docs[0].data())
  //           setLastBlog(false)
  //         }
  //       })
  //     }
  //   }
  //   fetchBlogs()
  // }, [data, doc.number])


  // SETTING DATA OBJECT.

  // useEffect(() => {
  //   document.getElementById("root").innerHTML = `<object style="width:100vw;height:100vh;" type="text/html" data=${`https://stephen-1973.github.io/read/elasticsearch-with-helm/index.html`}></object>`
  // }, [])

  return (
    <Box maxW='100rem' m={'auto'}>
      <NavBar blogUrl={`/read/${doc.id}`} activeTab='Blogs' />

      {/* REMOVE LAST BLOG AND FIRST BLOG OPTION AND SHOW LIST OF BLOGS AT THE END OF BLOG. */}
      {/* {
        (!(firstBlog) && showNextBlogs) && (
          // @ts-ignore
          <NextLink passHref href={`/read/${prevBlog.id}`}>
            <Link _hover={{ textDecoration: 'none' }} _active={{ textDecoration: 'none' }} _focus={{ textDecoration: 'none' }}>
              <CardDisplay imageSrc={prevBlog.
                // @ts-ignore
                imageSource} Title={prevBlog.title} Description={prevBlog.pageDescription} prevBlog={true} nextBlog={undefined} />
            </Link>
          </NextLink>
        )
      } */}
      <Head>
        <title>{doc.title}</title>
        <meta name='description' content={doc.pageDescription}></meta>
      </Head>
      <Box mt='10'>
        <div id='root'>
          <object style={{ width: "100vw", height: "100vh" }} type="text/html" data={doc.website_url}></object>
        </div>
      </Box>
      {/* <Script src={doc.scriptSource} strategy='lazyOnload' onLoad={() => {setShowNextBlogs(true)}}></Script> */}


      {/* REMOVE LAST BLOG AND FIRST BLOG OPTION AND SHOW LIST OF BLOGS AT THE END OF BLOG. */}
      {/* {
        (!(lastBlog) && showNextBlogs) && (
          <LazyLoad>
            <Box display='flex' alignItems='flex-end' justifyContent={'flex-end'}>
              <NextLink href={`/read/${nextBlog.
                // @ts-ignore
                id}`} passHref>
                <Link _hover={{ textDecoration: 'none' }} _active={{ textDecoration: 'none' }} _focus={{ textDecoration: 'none' }} w='fit-content'>
                  <CardDisplay imageSrc={nextBlog.
                    // @ts-ignore
                    imageSource} Title={nextBlog.title} Description={nextBlog.pageDescription} nextBlog={true} prevBlog={undefined} />
                </Link>
              </NextLink>
            </Box>
          </LazyLoad>
        )
      } */}

    </Box>

  )
}

export default BlogId


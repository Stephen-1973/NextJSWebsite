// @ts-nocheck
import { getDocs, collection, query, where,onSnapshot } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { 
  HStack,
  Box,
  Text,
  Center,
  Heading,
  VStack,
  Stack,
  Flex,
  SimpleGrid,
  GridItem,
  Link
} from '@chakra-ui/react';
import Head from 'next/head';
import NavBar from '../../sections/NavBar';
import { useEffect,useState } from 'react'
import NextLink from 'next/link';
import CardDisplay from './components/prev-next-blog-cards';
import Script from 'next/script';



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
      <NavBar />
      {
        !(firstBlog) && (
        
          <NextLink passHref href={`/read/${prevBlog.id}`}>
            <Link _hover={{textDecoration:'none'}} _active={{textDecoration:'none'}} _focus={{textDecoration:'none'}}>
            <CardDisplay imageSrc={prevBlog.imageSource} Title={prevBlog.title} Description={prevBlog.pageDescription} prevBlog={true}/>
            </Link>
          </NextLink>
        )
      }
      <Head>
        {/* <link rel='stylesheet' href={doc.cssRef}/> */}
        <title>{doc.title}</title>
        <meta name='description' content={doc.pageDescription}></meta>
        <script defer='defer' src={doc.scriptSource}></script>
      </Head>
      <Box visibility={'hidden'}>
        <HStack></HStack>
        <VStack></VStack>
        <SimpleGrid>
          <GridItem></GridItem>
        </SimpleGrid>
        <Center>
          <Flex></Flex>
          <Text>Stephen</Text>
          <Heading>Stephen</Heading>
        </Center>
        <Stack></Stack>
      </Box>
      <div id='root'>
        
      </div>
      {
        !(lastBlog) && (
          <NextLink href={`/read/${nextBlog.id}`} passHref>
            <Link _hover={{textDecoration:'none'}} _active={{textDecoration:'none'}} _focus={{textDecoration:'none'}}>
              <Box transform={['translateX(7%)','0','translateX(45%)']}>
                <CardDisplay imageSrc={nextBlog.imageSource} Title={nextBlog.title} Description={nextBlog.pageDescription} nextBlog={true}/>
              </Box>
            </Link>
          </NextLink>
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

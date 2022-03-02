// @ts-check
import { Box, Button, HStack, VStack,Link, Heading, Center, Text,useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BoxStyles,buttonStyles,selectedButton } from "./utils/Styles";
import {
  where,
  query,
  collection,
  getDocs
} from '@firebase/firestore';
import { db } from "../../../services/firebase";
import BlogPostsWithImages from "../../Home/components/utils/BlogSection/utils/Blog-display-card";
import { AnimatePresence, motion } from "framer-motion";
import NextLink from 'next/link';

export default function BlogDisplay() {
  const [selected, setSelected] = useState("");
  const [firstBlogData, setFirstBlogData] = useState([]);
  const [secondBlogData, setSecondBlogData] = useState([]);
  const [thirdBlogData, setthirdBlogData] = useState([]);

  const [kubBlogs, setKubBlogs] = useState([]);
  const [machineBlogs, setMachineBlogs] = useState([]);
  const [otherBlogs, setOtherBlogs] = useState([]);

  const [firstTime, setFirstTime] = useState(true);

  const getBlogs = async () => {
    const kubBlogs = await getDocs(query(collection(db, "blogs"), where("tags", "array-contains-any", ["kubernetes", "microservices", "nodejs"])));
    setKubBlogs(kubBlogs.docs);
    const machineblogs = await getDocs(query(collection(db, "blogs"), where("tags", "array-contains-any", ["python",'machine-learning','deep-learning','reinforcement-learning','artificial-intelligence'])));
    setMachineBlogs(machineblogs.docs);
    const otherBlogs = await getDocs(query(collection(db, "blogs"), where("tags", "array-contains", "other")));
    setOtherBlogs(otherBlogs.docs);
    console.log('done')
  }

  
  useEffect(() => {
    if (firstTime) {
      getBlogs();
      setFirstTime(false);
    }
    else {
      if (selected === "kubernetes") {
        console.log("selected", selected);
        console.log("kubBlogs", kubBlogs.map(doc=>doc.data()));
        setFirstBlogData(kubBlogs);
        setSecondBlogData(machineBlogs);
        setthirdBlogData(otherBlogs);
      } if (selected === "machine-learning") {
        setFirstBlogData(machineBlogs);
        setSecondBlogData(kubBlogs);
        setthirdBlogData(otherBlogs);
      } else if (selected === "other") {
        console.log("selected", selected);
        setFirstBlogData(otherBlogs);
        setSecondBlogData(machineBlogs);
        setthirdBlogData(kubBlogs);
      }
      console.log(
        "FirstBlog",
        firstBlogData.map(blog => blog.data().title)
      );
      console.log("Second blog", secondBlogData?.map(blog => blog.data().title));
      console.log("other blog", thirdBlogData?.map(blog => blog.data().title));
    }
  }, [selected, firstBlogData, secondBlogData, thirdBlogData, firstTime, kubBlogs, machineBlogs, otherBlogs]); 
  
  // framer-motion animations

  const initialPosition = {
    transform: "translateY(10rem)",
    opacity: 0
  }

  const animate = {
    transform: "translateY(0%)",
    opacity: 1
  }

  const exitPosition = {
    transform: "translateY(-3rem)",
    opacity: 0
  }
  const bg = useColorModeValue('gray.200','gray.700')

  return (
    <Box {...BoxStyles}>
      <HStack spacing={1}>
        <Button {...buttonStyles} onClick={()=>setSelected("kubernetes")} { ...selected === "kubernetes" && {...selectedButton} }>
          Kubernetes
        </Button>
        <Button {...buttonStyles} onClick={()=>setSelected("machine-learning")} { ...selected === "machine-learning" && {...selectedButton} }>
          Machine Learning
        </Button>
        <Button {...buttonStyles} onClick={()=>setSelected("other")} { ...selected === "other" && {...selectedButton} }>
          Other
        </Button>
      </HStack>
      <Text opacity={0.6}>select any option to view blogs</Text>

      <VStack mt='5' spacing={5}>
        <AnimatePresence initial={false}>
            <motion.div style={{width: "100%"}} initial={initialPosition} // @ts-ignore
            key={firstBlogData} animate={animate} exit={exitPosition} transition={{duration: 0.6}}>
              <HStack alignItems='flex-start' justifyContent='flex-start' w='full' overflowX='auto'>      
                  {
                    firstBlogData?.map(blog => <NextLink href={`/read/${blog.data().id}`} passHref key={blog.data().id}>
                    <Link>
                      <BlogPostsWithImages BlogData={blog.data()} />
                    </Link>
                  </NextLink>)
                  }
              </HStack>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence initial={false}>
            <motion.div style={{width: "100%"}} initial={initialPosition} // @ts-ignore
            key={firstBlogData} animate={animate} exit={exitPosition} transition={{duration: 0.6}}>
              <HStack alignItems='flex-start' justifyContent='flex-start' w='full' overflowX='auto'>      
                  {
                secondBlogData?.map(blog =>
                  <NextLink href={`/read/${blog.data().id}`} passHref key={blog.data().id}>
                    <Link>
                      <BlogPostsWithImages BlogData={blog.data()} />
                    </Link>
                  </NextLink>
                )
                  }
              </HStack>
          </motion.div>
        </AnimatePresence>
              <AnimatePresence initial={false}>
            <motion.div style={{width: "100%"}} initial={initialPosition} // @ts-ignore
            key={firstBlogData} animate={animate} exit={exitPosition} transition={{duration: 0.6}}>
              <HStack alignItems='flex-start' justifyContent='flex-start' w='full' overflowX='auto'>      
                  {
                    thirdBlogData?.map(blog => <NextLink href={`/read/${blog.data().id}`} passHref key={blog.data().id}>
                    <Link>
                      <BlogPostsWithImages BlogData={blog.data()} />
                    </Link>
                  </NextLink>)
                  }
              </HStack>
          </motion.div>
        </AnimatePresence>
      </VStack>
      <Box id='more' {...BoxStyles} h='fit-content'>
        <Center>
           <Heading as='h1'>
            Why should you read my blogs?
          </Heading>
        </Center>
        <Text as='p' fontSize='xl' p={3}>
          I know many of you are wondering right now whether or not you should read my blogs. Then you&apos;re doing the right thing giving it some thought. Because most blogs out there are either too lengthy and take a lot of time or the bloggers aren&apos;t knowledgable about what they are writing at all. I have read them myself so I know. That&apos;s why I try to keep my blogs as short as possible so your reading time can be as efficient as possible.
          <br />
          <br />
          I know I don&apos;t dive into the technical details that&apos;s a disadvantage if you are trying to dive deeper to the very basic level of the system but most wouldn&apos;t go that far because no job/startup requires such level of depth until you are looking to create a better system than the one you are currently studying. The best way to dive that deep into the topic is to read blogs of the certain technology.
        </Text>
      </Box>
    </Box>
  )
}
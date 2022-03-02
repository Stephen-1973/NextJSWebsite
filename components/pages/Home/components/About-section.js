// @ts-check
import { motion,AnimatePresence } from 'framer-motion';
import { Heading, HStack, Text } from '@chakra-ui/react';
import Aboutcard from './utils/AboutSection/About-card';
import router from 'next/router';

const AboutInfo = [
  {
    src: "/pages/About/highschool.png",
    title: "Tarpon springs High School",
    description: "From best days of my life to being bullied for being a geek"
  },
    {
    src: "/pages/About/university.jpg",
    title: "Imperial College London",
    description: "Master C/C++ which eventually led me down the path of Reinforcement Learning"
  },
        {
    src: "/pages/About/startup.jpeg",
    title: "Startup during university",
    description: "Three months into startup a medium scale company bought it only to later label it as useless"
  },     {
    src: "https://images.unsplash.com/photo-1556382363-8967ad2b37f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    title: "Job at amazon",
    description: "Best way to put my skills into use. Decide to quit the job for a more adventurous and risky life."
  },
  {
    src: "/pages/About/webdevelopment.png",
    title: "Mastered Web Development",
    description: "Was motivated to learn more of Web Development as websites are the best way to present your ideas."
  }, 
    {
    src: "/pages/About/codding.in.jpeg",
    title: "First step towards new startup",
    description: "You reading this is the proof of my success"
  }
]

function About() {
  const hoverEffect = {
    transform: "skew(-15deg);",
    transition: "all .4s",
    color: "#55c57a",
    padding: "0",
    paddingTop: "10",
    borderBottom: "1px solid #55c57a"
  }
  return (
    <AnimatePresence initial={true}>
      <motion.div style={{ textAlign: 'left' }} animate={{ transform: 'translateY(0rem)' }} initial={{ transform: "translateY(10rem)" }} transition={{ duration: 1 }} exit={{ transform: 'translateY(10rem)' }}>
        <HStack w={['95%','90%','90%']} m='auto' justifyContent={'space-between'}>
          <Heading  as='h1' fontSize={'1.5rem'}>
            My <span style={{color:'#5EBAA6'}}>life</span> in <span style={{color:"#5EBAA6"}}>10 seconds</span>
          </Heading>
          <Text onClick={() => router.push('/about')} cursor='pointer' padding=".2rem" transition="all .2s ease-in" _hover={{ backgroundColor: "#5EBAA6", boxShadow: 'lg', translateY: "-.5rem", color: "white" }} color='#5EBAA6' position='relative' borderBottom='1px solid #5EBAA6'>
            Learn more &rarr; 
          </Text>
        </HStack>
        <HStack m='auto' spacing={2} overflow='auto' ml={[0,0,10]} w={['100%','100%','90%']} p={3} pb={0} h='fit-content'>
          {AboutInfo.map((item, index) => {
            return (
              <Aboutcard key={index} item={item} />
                )
              }
            )
          } )
      </HStack>
       </motion.div>
    </AnimatePresence>
  )
}

export default About
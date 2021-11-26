import {
  Heading,
  Image,
  useColorModeValue,
  Text,
  Box,
  FormControl,
  Input,
  IconButton
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NavBar from '../sections/NavBar';
import { useState } from 'react';
import styled from 'styled-components';
import { CheckCircleIcon } from '@chakra-ui/icons';


function About() {
  const [chat, setChat] = useState(false);
  const textColor = useColorModeValue('gray.800', 'gray.200')
  const useBgBox = useColorModeValue('gray.800', 'black')
  const sendButtonBg = useColorModeValue('cyan.400', 'cyan.800')

  return (
    <>
      <NavBar/>
      <motion.div initial={{y:0,opacity:0}} animate={{y:50,x:50,opacity:1}} key={textColor} exit={{y:0,opacity:0}} transition={{duration: 1}}>
        <Heading color={textColor} fontSize='11vw'>let&#39;s get</Heading>
        <Heading mx='10vw' position='absolute' color={textColor} fontSize='11vw'>familiar</Heading>
      </motion.div>
      <Image alt='Stephen Logo' src='/share.jpeg' h={['30vh', '50vh', '70vh']} w='100vw' objectFit='contain' my={10} mx={[5, 5]} />
      <motion.div initial={{y:0,opacity: 0}} animate={{y: -20,opacity: 1}} exit={{y:0,opactiy: 0}} key={useColorModeValue('purple','yellow')} transition={{duration: 1}}>
        <Text fontSize={['1rem','1.2rem','2rem']} maxW='80vw' m='auto' textAlign='center'>
          I don&#39;t want my viewers to read anymore of hard-coded paragraphes.
          Let&#39;s <span style={{ cursor: 'pointer', fontSize: '200%' }} onClick={() => { setChat(!chat) }}>chat</span> for real now.
        </Text>
      </motion.div>
      {chat && 
        <Box borderRadius='xl' overflow='hidden' bg={useBgBox} position='fixed' bottom={['0rem','0rem','2rem']} right={['0rem','0rem','2rem']}>
        <Box bg={useBgBox} w={['110vw', '100vw', '100vw']} h={['100vh', '100vh', '70vh']}>
          <Box w='100%' h='90%' className='ChatArea'>
            <Message>
              <Text px={2} borderRadius={20} bg='green.400'>Hello</Text>
            </Message>
          </Box>
          <form onSubmit={() => { setChat(false) }}>
          <FormControl  display='flex' flexDirection='row' justifyContent='space-evenly' position='absolute' bottom='0' w='100%'>
            <Input color='gray.400' w='85%' placeholder='Ask me .. Trust me I will respond' />
            <IconButton type='submit' bg={sendButtonBg} icon={<CheckCircleIcon />}/>
          </FormControl>
          </form>
          </Box>
        </Box>
      }
    </>
  )
}

const Message = styled.div`
max-width: 20rem;
width: fit-content;
margin: 1rem;
background-color: white;
border-radius: 29px;
`;



export default About
